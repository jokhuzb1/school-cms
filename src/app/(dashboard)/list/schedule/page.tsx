import Timetable from "@/components/Timetable";
import { lessonsData, classesData, teachersData } from "@/lib/data";

const SchedulePage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between bg-white p-4 rounded-md">
        <h1 className="text-lg font-semibold">Dars jadvali</h1>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Haftalik jadval</span>
          <span>•</span>
          <span>2025/2026 o&apos;quv yili</span>
        </div>
      </div>

      {/* TIMETABLE */}
      <Timetable
        lessons={lessonsData}
        classes={classesData}
        teachers={teachersData}
      />
    </div>
  );
};

export default SchedulePage;
