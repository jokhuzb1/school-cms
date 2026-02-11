import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  attendanceData,
  role,
  studentsData,
  studentSubjectsData,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type StudentRow = {
  id: number;
  studentId: string;
  name: string;
  class: string;
  grade: number;
};

type SubjectRow = {
  id: number;
  studentId: number;
  subject: string;
  score: number;
  maxScore: number;
};

const columns = [
  {
    header: "O'quvchi",
    accessor: "student",
  },
  {
    header: "Sinf",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "O'rtacha baho",
    accessor: "avgGrade",
    className: "hidden md:table-cell",
  },
  {
    header: "Davomat",
    accessor: "attendance",
    className: "hidden lg:table-cell",
  },
  {
    header: "Xavf",
    accessor: "risk",
  },
  {
    header: "Tavsiya",
    accessor: "recommendation",
    className: "hidden xl:table-cell",
  },
  {
    header: "E'tibor beriladigan fan",
    accessor: "focus",
    className: "hidden lg:table-cell",
  },
];

const getAttendanceRate = (studentName: string) => {
  const records = attendanceData.filter((a) => a.student === studentName);
  if (records.length === 0) return 0;
  const present = records.filter((a) => a.status === "present").length;
  return Math.round((present / records.length) * 100);
};

const getAverageGrade = (studentId: number) => {
  const subjects = studentSubjectsData.filter((s) => s.studentId === studentId);
  if (subjects.length === 0) return 0;
  const total = subjects.reduce((sum, s) => sum + (s.score / s.maxScore) * 100, 0);
  return Math.round(total / subjects.length);
};

const getWeakestSubject = (studentId: number) => {
  const subjects = studentSubjectsData.filter((s) => s.studentId === studentId);
  if (subjects.length === 0) return null;
  return subjects.reduce((weakest, current) => {
    const weakestPct = (weakest.score / weakest.maxScore) * 100;
    const currentPct = (current.score / current.maxScore) * 100;
    return currentPct < weakestPct ? current : weakest;
  });
};

const getRiskLevel = (avgGrade: number, attendance: number) => {
  if (avgGrade < 60 || attendance < 70) return { label: "Yuqori", color: "bg-red-100 text-red-700" };
  if (avgGrade < 75 || attendance < 85) return { label: "O'rtacha", color: "bg-yellow-100 text-yellow-700" };
  return { label: "Past", color: "bg-green-100 text-green-700" };
};

const getRecommendation = (avgGrade: number, attendance: number, focusSubject?: string) => {
  if (avgGrade < 60) return "Qo'shimcha dars va haftalik kuzatuv.";
  if (attendance < 70) return "Davomat bo'yicha reja va ota-ona bilan aloqa.";
  if (avgGrade < 75 && focusSubject) return `${focusSubject} bo'yicha maqsadli takrorlash.`;
  if (attendance < 85) return "Punktualikni nazorat qilish va tartibni kuchaytirish.";
  return "Joriy rejani davom ettirish va oyma-oy kuzatish.";
};

const AiListPage = () => {
  const renderRow = (item: StudentRow) => {
    const avgGrade = getAverageGrade(item.id);
    const attendance = getAttendanceRate(item.name);
    const risk = getRiskLevel(avgGrade, attendance);
    const weakest = getWeakestSubject(item.id);
    const focusLabel = weakest
      ? `${weakest.subject} (${Math.round((weakest.score / weakest.maxScore) * 100)}%)`
      : "Mavjud emas";
    const recommendation = getRecommendation(avgGrade, attendance, weakest?.subject);

    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.studentId}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">
          <span className="px-2 py-1 rounded-full bg-lamaSkyLight text-xs font-semibold">
            {avgGrade}%
          </span>
        </td>
        <td className="hidden lg:table-cell">{attendance}%</td>
        <td>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${risk.color}`}>
            {risk.label}
          </span>
        </td>
        <td className="hidden xl:table-cell text-xs text-gray-500">
          {recommendation}
        </td>
        <td className="hidden lg:table-cell text-xs text-gray-500">{focusLabel}</td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">AI tahlil</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="px-4 py-2 rounded-md bg-lamaSky text-sm font-semibold">
              Tahlilni olish
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table
        columns={columns}
        renderRow={renderRow}
        data={studentsData as StudentRow[]}
      />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AiListPage;
