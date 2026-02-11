"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { messagesData, role } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

type Message = {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  message: string;
  date: string;
  status: "read" | "unread";
};

const MessageListPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [messages, setMessages] = useState<Message[]>(messagesData as Message[]);

  const handleMessageClick = (message: Message) => {
    // Mark as read when opening
    if (message.status === "unread") {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === message.id ? { ...msg, status: "read" as const } : msg
        )
      );
    }
    setSelectedMessage(message);
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Barcha xabarlar</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {(role === "admin" || role === "teacher" || role === "student" || role === "parent") && (
              <FormModal table="message" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* MESSAGES LIST */}
      <div className="mt-4">
        {messages.map((item) => (
          <div
            key={item.id}
            className={`border-b border-gray-200 p-4 hover:bg-lamaSkyLight cursor-pointer transition-colors ${
              item.status === "unread" ? "bg-blue-50" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              {/* Message Content - Clickable */}
              <div
                className="flex-1 min-w-0"
                onClick={() => handleMessageClick(item)}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className={`text-sm ${
                      item.status === "unread" ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {item.sender}
                  </h3>
                  <span className="text-xs text-gray-500">→</span>
                  <span className="text-xs text-gray-500">{item.recipient}</span>
                  {item.status === "unread" && (
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                      Yangi
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mb-1 ${
                    item.status === "unread" ? "font-semibold" : ""
                  }`}
                >
                  {item.subject}
                </p>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {item.message}
                </p>
                <p className="text-xs text-gray-400 mt-2">{item.date}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <FormModal table="message" type="update" data={item} />
                <FormModal table="message" type="delete" id={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MESSAGE VIEW MODAL */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Xabar tafsilotlari</h2>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <Image src="/close.png" alt="Yopish" width={14} height={14} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* From/To Info */}
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-gray-600 w-20">Kimdan:</span>
                  <span className="text-sm font-semibold">{selectedMessage.sender}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-gray-600 w-20">Kimga:</span>
                  <span className="text-sm">{selectedMessage.recipient}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-gray-600 w-20">Sana:</span>
                  <span className="text-sm text-gray-600">{selectedMessage.date}</span>
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">{selectedMessage.subject}</h3>
                <div className="h-px bg-gray-200"></div>
              </div>

              {/* Message Body */}
              <div className="prose max-w-none">
                <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {selectedMessage.message}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Yopish
              </button>
              <FormModal table="message" type="update" data={selectedMessage} />
            </div>
          </div>
        </div>
      )}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default MessageListPage;
