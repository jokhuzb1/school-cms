"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  student: z.string().min(1, { message: "O'quvchi ismi majburiy!" }),
  class: z.string().min(1, { message: "Sinf majburiy!" }),
  date: z.coerce.date({ message: "Sana majburiy!" }),
  status: z.enum(["present", "absent", "late"], { message: "Holat majburiy!" }),
});

type Inputs = z.infer<typeof schema>;

const AttendanceForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    // TODO: Implement form submission logic
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Yangi davomat yozuvi yaratish" : "Davomat yozuvini yangilash"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Davomat ma&apos;lumotlari
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="O&apos;quvchi ismi"
          name="student"
          defaultValue={data?.student}
          register={register}
          error={errors?.student}
        />
        <InputField
          label="Sinf"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
        />
        <InputField
          label="Sana"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Holat</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("status")}
            defaultValue={data?.status}
          >
            <option value="">Holatni tanlang</option>
            <option value="present">Hozir</option>
            <option value="absent">Yo&apos;q</option>
            <option value="late">Kech qolgan</option>
          </select>
          {errors.status?.message && (
            <p className="text-xs text-red-400">
              {errors.status.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Yaratish" : "Yangilash"}
      </button>
    </form>
  );
};

export default AttendanceForm;
