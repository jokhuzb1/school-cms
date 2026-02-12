"use client";

import { useState } from "react";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  day: number;
  startTime: string;
  endTime: string;
};

type TimetableProps = {
  lessons: Lesson[];
  classes: { id: number; name: string; grade: number }[];
  teachers: { id: number; name: string }[];
};

const Timetable = ({ lessons, classes, teachers }: TimetableProps) => {
  const [selectedClass, setSelectedClass] = useState<string>(classes[0]?.name || "");
  const [selectedTeacher, setSelectedTeacher] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"class" | "teacher">("class");

  const days = [
    { id: 1, name: "Dushanba" },
    { id: 2, name: "Seshanba" },
    { id: 3, name: "Chorshanba" },
    { id: 4, name: "Payshanba" },
    { id: 5, name: "Juma" },
    { id: 6, name: "Shanba" },
  ];

  const timeSlots = [
    { start: "08:00", end: "08:45" },
    { start: "08:55", end: "09:40" },
    { start: "09:50", end: "10:35" },
    { start: "10:55", end: "11:40" },
    { start: "11:50", end: "12:35" },
    { start: "13:00", end: "13:45" },
  ];

  // Filter lessons based on view mode
  const filteredLessons = lessons.filter((lesson) => {
    if (viewMode === "class") {
      return lesson.class === selectedClass;
    } else {
      return selectedTeacher === "all" || lesson.teacher === selectedTeacher;
    }
  });

  // Get lesson for specific day and time slot
  const getLessonForSlot = (day: number, timeSlot: { start: string; end: string }) => {
    return filteredLessons.find(
      (lesson) => lesson.day === day && lesson.startTime === timeSlot.start
    );
  };

  // Get unique sorted classes by grade and section
  const sortedClasses = [...classes].sort((a, b) => {
    if (a.grade !== b.grade) return a.grade - b.grade;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
        {/* View Mode Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("class")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "class"
                ? "bg-lamaSky text-blue-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sinf bo&apos;yicha
          </button>
          <button
            onClick={() => setViewMode("teacher")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "teacher"
                ? "bg-lamaSky text-blue-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            O&apos;qituvchi bo&apos;yicha
          </button>
        </div>

        {/* Class/Teacher Selector */}
        {viewMode === "class" ? (
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lamaSky"
          >
            {sortedClasses.map((cls) => (
              <option key={cls.id} value={cls.name}>
                {cls.name}-sinf
              </option>
            ))}
          </select>
        ) : (
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lamaSky flex-1 md:flex-none"
          >
            <option value="all">Barcha o&apos;qituvchilar</option>
            {teachers
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((teacher) => (
                <option key={teacher.id} value={teacher.name}>
                  {teacher.name}
                </option>
              ))}
          </select>
        )}

        {/* Current Selection Info */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-gray-600">
            {viewMode === "class" ? (
              <span className="font-medium text-gray-800">{selectedClass}-sinf</span>
            ) : selectedTeacher === "all" ? (
              <span className="font-medium text-gray-800">Barcha o&apos;qituvchilar</span>
            ) : (
              <span className="font-medium text-gray-800">{selectedTeacher}</span>
            )}
          </span>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-lamaSky">
              <th className="border border-gray-300 p-3 text-left font-semibold text-sm sticky left-0 bg-lamaSky z-10">
                Vaqt
              </th>
              {days.map((day) => (
                <th
                  key={day.id}
                  className="border border-gray-300 p-3 text-center font-semibold text-sm"
                >
                  {day.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium text-sm bg-lamaSkyLight sticky left-0 z-10">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600">{index + 1}-dars</span>
                    <span className="font-semibold">
                      {slot.start} - {slot.end}
                    </span>
                  </div>
                </td>
                {days.map((day) => {
                  const lesson = getLessonForSlot(day.id, slot);
                  return (
                    <td
                      key={day.id}
                      className="border border-gray-300 p-2 text-center align-top"
                    >
                      {lesson ? (
                        <div className="bg-lamaPurpleLight rounded-md p-2 h-full min-h-[80px] flex flex-col justify-between hover:bg-lamaPurple transition-colors">
                          <div>
                            <div className="font-semibold text-sm mb-1 text-gray-800">
                              {lesson.subject}
                            </div>
                            {viewMode === "teacher" && (
                              <div className="text-xs text-gray-600 mb-1">
                                {lesson.class}-sinf
                              </div>
                            )}
                            {viewMode === "class" && (
                              <div className="text-xs text-gray-600 line-clamp-2">
                                {lesson.teacher}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="h-full min-h-[80px] flex items-center justify-center text-gray-300">
                          -
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-lamaPurpleLight rounded"></div>
            <span className="text-gray-600">Dars</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-lamaSkyLight rounded"></div>
            <span className="text-gray-600">Vaqt oralig&apos;i</span>
          </div>
          <div className="ml-auto text-gray-500">
            Jami: {filteredLessons.length} ta dars
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
