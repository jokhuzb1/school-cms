const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">E&apos;lonlar</h1>
        <span className="text-xs text-gray-400">Hammasini ko&apos;rish</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Matematika testiga tayyorgarlik</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            4A sinf uchun test mashqlari yuborildi. Iltimos, darsdan keyin
            topshiriqlarni yakunlang.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Ota-onalar yig&apos;ilishi</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Haftaning juma kuni soat 16:00 da zalda yig&apos;ilish bo&apos;ladi.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Kutubxona haftaligi</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Kitoblar ko&apos;rgazmasi va yangi kitoblar bilan tanishtirish
            o&apos;tkaziladi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
