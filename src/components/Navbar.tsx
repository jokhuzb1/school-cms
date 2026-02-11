 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { announcementsData, messagesData, role } from "@/lib/data";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<"messages" | "announcements" | "profile" | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const recentMessages = messagesData.slice(0, 3);
  const recentAnnouncements = announcementsData.slice(0, 3);

  const roleLabel =
    role === "admin"
      ? "Administrator"
      : role === "teacher"
      ? "O'qituvchi"
      : role === "student"
      ? "O'quvchi"
      : "Ota-ona";

  return (
    <div className="flex items-center justify-between p-4" ref={wrapperRef}>
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Qidiruv" width={14} height={14} />
        <input
          type="text"
          placeholder="Qidirish..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="relative">
          <button
            type="button"
            className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
            onClick={() => setOpenMenu(openMenu === "messages" ? null : "messages")}
            aria-haspopup="menu"
            aria-expanded={openMenu === "messages"}
          >
            <Image src="/message.png" alt="Xabarlar" width={20} height={20} />
          </button>
          {openMenu === "messages" && (
            <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-sm font-semibold">Xabarlar</span>
                <Link className="text-xs text-blue-500" href="/list/messages">
                  Hammasini ko&apos;rish
                </Link>
              </div>
              <div className="py-2">
                {recentMessages.map((item) => (
                  <div key={item.id} className="px-4 py-2 hover:bg-gray-50">
                    <p className="text-xs font-semibold text-gray-800">{item.subject}</p>
                    <p className="text-xs text-gray-500 truncate">
                      {item.sender} → {item.recipient}
                    </p>
                  </div>
                ))}
                {recentMessages.length === 0 && (
                  <p className="px-4 py-3 text-xs text-gray-500">
                    Hozircha xabar yo&apos;q.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative"
            onClick={() =>
              setOpenMenu(openMenu === "announcements" ? null : "announcements")
            }
            aria-haspopup="menu"
            aria-expanded={openMenu === "announcements"}
          >
            <Image
              src="/announcement.png"
              alt="E&apos;lonlar"
              width={20}
              height={20}
            />
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
              {Math.min(announcementsData.length, 9)}
            </div>
          </button>
          {openMenu === "announcements" && (
            <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-sm font-semibold">E&apos;lonlar</span>
                <Link className="text-xs text-blue-500" href="/list/announcements">
                  Hammasini ko&apos;rish
                </Link>
              </div>
              <div className="py-2">
                {recentAnnouncements.map((item) => (
                  <div key={item.id} className="px-4 py-2 hover:bg-gray-50">
                    <p className="text-xs font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.class}</p>
                  </div>
                ))}
                {recentAnnouncements.length === 0 && (
                  <p className="px-4 py-3 text-xs text-gray-500">
                    Hozircha e&apos;lon yo&apos;q.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="flex items-center gap-3"
          onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")}
          aria-haspopup="menu"
          aria-expanded={openMenu === "profile"}
        >
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">Jasur Bek</span>
            <span className="text-[10px] text-gray-500 text-right">{roleLabel}</span>
          </div>
          <Image
            src="/avatar.png"
            alt="Profil"
            width={36}
            height={36}
            className="rounded-full"
          />
        </button>
        {openMenu === "profile" && (
          <div className="absolute right-4 top-16 w-48 bg-white shadow-lg rounded-md border border-gray-100 z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs text-gray-500">Tizimga kirgan</p>
              <p className="text-sm font-semibold">Jasur Bek</p>
            </div>
            <div className="py-2">
              <Link className="block px-4 py-2 text-sm hover:bg-gray-50" href="/profile">
                Profil
              </Link>
              <Link className="block px-4 py-2 text-sm hover:bg-gray-50" href="/settings">
                Sozlamalar
              </Link>
              <button
                type="button"
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
              >
                Chiqish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
