"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dush",
    present: 60,
    absent: 40,
  },
  {
    name: "Sesh",
    present: 70,
    absent: 60,
  },
  {
    name: "Chor",
    present: 90,
    absent: 75,
  },
  {
    name: "Pay",
    present: 90,
    absent: 75,
  },
  {
    name: "Jum",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Davomat</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="h-[260px]">
        {isClient ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={data} barSize={20}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ddd"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
              />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
              />
              <Bar
                dataKey="present"
                name="Kelgan"
                fill="#FAE27C"
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="absent"
                name="Kelmagan"
                fill="#C3EBFA"
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : null}
      </div>
    </div>
  );
};

export default AttendanceChart;
