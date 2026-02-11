import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  // This would come from authentication/session in a real app
  const userRole = role as "admin" | "teacher" | "student" | "parent";
  const currentUser = {
    id: 1,
    name:
      role === "admin"
        ? "Javlon Administrator"
        : role === "teacher"
        ? "Saida O'qituvchi"
        : role === "student"
        ? "Murod O'quvchi"
        : "Dilnoza Ota-ona",
    email:
      role === "admin"
        ? "admin@maktab.uz"
        : role === "teacher"
        ? "saida.oqituvchi@maktab.uz"
        : role === "student"
        ? "murod.oquvchi@maktab.uz"
        : "dilnoza.otaona@maktab.uz",
    phone: "+998 90 123 45 67",
    bloodType: "A+",
    dateOfBirth: "1990-yanvar",
    address: "Toshkent, Mustaqillik ko'chasi, 12-uy",
    img: role === "admin" 
      ? "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200"
      : role === "teacher"
      ? "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
      : role === "student"
      ? "https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
      : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Ta'lim sohasida 10 yildan ortiq tajribaga ega fidoyi mutaxassis.",
  };

  // Role-specific stats
  const stats = role === "admin" 
    ? [
        { icon: "/singleClass.png", value: "1,234", label: "Jami o'quvchilar" },
        { icon: "/singleLesson.png", value: "85", label: "O'qituvchilar" },
        { icon: "/singleBranch.png", value: "12", label: "Sinflar" },
        { icon: "/singleAttendance.png", value: "95%", label: "Umumiy davomat" },
      ]
    : role === "teacher"
    ? [
        { icon: "/singleAttendance.png", value: "90%", label: "Davomat" },
        { icon: "/singleBranch.png", value: "3", label: "Fanlar" },
        { icon: "/singleLesson.png", value: "12", label: "Haftalik darslar" },
        { icon: "/singleClass.png", value: "5", label: "Sinflar" },
      ]
    : role === "student"
    ? [
        { icon: "/singleAttendance.png", value: "92%", label: "Davomat" },
        { icon: "/singleBranch.png", value: "6-sinf", label: "Sinf" },
        { icon: "/singleLesson.png", value: "18", label: "Darslar" },
        { icon: "/singleClass.png", value: "6A", label: "Sinf" },
      ]
    : [
        { icon: "/singleClass.png", value: "2", label: "Bolalar" },
        { icon: "/singleAttendance.png", value: "95%", label: "O'rtacha davomat" },
        { icon: "/singleLesson.png", value: "5", label: "Uchrashuvlar" },
        { icon: "/singleBranch.png", value: "3", label: "Xabarlar" },
      ];

  // Role-specific shortcuts
  const shortcuts = role === "admin"
    ? [
        { label: "O'qituvchilarni boshqarish", href: "/list/teachers", bg: "bg-lamaSkyLight" },
        { label: "O'quvchilarni boshqarish", href: "/list/students", bg: "bg-lamaPurpleLight" },
        { label: "Hisobotlarni ko'rish", href: "/list/results", bg: "bg-lamaYellowLight" },
        { label: "E'lonlar", href: "/list/announcements", bg: "bg-pink-50" },
        { label: "Sozlamalar", href: "/settings", bg: "bg-lamaSkyLight" },
      ]
    : role === "teacher"
    ? [
        { label: "Mening sinflarim", href: "/list/classes", bg: "bg-lamaSkyLight" },
        { label: "Mening o'quvchilarim", href: "/list/students", bg: "bg-lamaPurpleLight" },
        { label: "Mening darslarim", href: "/list/lessons", bg: "bg-lamaYellowLight" },
        { label: "Imtihonlar", href: "/list/exams", bg: "bg-pink-50" },
        { label: "Topshiriqlar", href: "/list/assignments", bg: "bg-lamaSkyLight" },
      ]
    : role === "student"
    ? [
        { label: "Mening darslarim", href: "/list/lessons", bg: "bg-lamaSkyLight" },
        { label: "Mening o'qituvchilarim", href: "/list/teachers", bg: "bg-lamaPurpleLight" },
        { label: "Mening imtihonlarim", href: "/list/exams", bg: "bg-pink-50" },
        { label: "Mening topshiriqlarim", href: "/list/assignments", bg: "bg-lamaSkyLight" },
        { label: "Mening natijalarim", href: "/list/results", bg: "bg-lamaYellowLight" },
      ]
    : [
        { label: "Mening farzandlarim", href: "/list/students", bg: "bg-lamaSkyLight" },
        { label: "Xabarlar", href: "/list/messages", bg: "bg-lamaPurpleLight" },
        { label: "Tadbirlar", href: "/list/events", bg: "bg-lamaYellowLight" },
        { label: "E'lonlar", href: "/list/announcements", bg: "bg-pink-50" },
        { label: "Natijalar", href: "/list/results", bg: "bg-lamaSkyLight" },
      ];

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={currentUser.img}
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{currentUser.name}</h1>
                {(userRole === "teacher" || userRole === "student") && (
                  <FormModal
                    table={userRole}
                    type="update"
                    data={{
                      id: currentUser.id,
                      username: currentUser.name.toLowerCase().replace(" ", ""),
                      email: currentUser.email,
                      password: "password",
                      firstName: currentUser.name.split(" ")[0],
                      lastName: currentUser.name.split(" ")[1],
                      phone: currentUser.phone,
                      address: currentUser.address,
                      bloodType: currentUser.bloodType,
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: currentUser.img,
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">{currentUser.bio}</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>{currentUser.bloodType}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>{currentUser.dateOfBirth}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span className="truncate">{currentUser.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{currentUser.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* STATS CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
              >
                <Image
                  src={stat.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">{stat.value}</h1>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCHEDULE */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Mening jadvalim</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUTS */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Tezkor harakatlar</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {shortcuts.map((shortcut, index) => (
              <Link
                key={index}
                className={`p-3 rounded-md ${shortcut.bg}`}
                href={shortcut.href}
              >
                {shortcut.label}
              </Link>
            ))}
          </div>
        </div>

        {/* PERFORMANCE */}
        <Performance />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default ProfilePage;
