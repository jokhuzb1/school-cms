"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import { teachersData, studentsData, parentsData } from "@/lib/data";

const schema = z.object({
  sender: z.string().min(1, { message: "Yuboruvchi majburiy!" }),
  recipient: z.string().min(1, { message: "Qabul qiluvchi majburiy!" }),
  subject: z.string().min(1, { message: "Mavzu majburiy!" }),
  message: z.string().min(1, { message: "Xabar matni majburiy!" }),
});

type Inputs = z.infer<typeof schema>;

const MessageForm = ({
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

  // Combine all users for sender/recipient selection
  const allUsers = [
    ...teachersData.map((t) => ({ name: t.name, role: "O'qituvchi" })),
    ...studentsData.map((s) => ({ name: s.name, role: "O'quvchi" })),
    ...parentsData.map((p) => ({ name: p.name, role: "Ota-ona" })),
  ];

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Yangi xabar yuborish" : "Xabarni yangilash"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Xabar ma&apos;lumotlari
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        {/* Sender Dropdown */}
        <div className="flex flex-col gap-2 w-full md:w-[48%]">
          <label className="text-xs text-gray-500">Kimdan (Yuboruvchi)</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sender")}
            defaultValue={data?.sender}
          >
            <option value="">Yuboruvchini tanlang</option>
            {allUsers.map((user, index) => (
              <option key={index} value={user.name}>
                {user.name} ({user.role})
              </option>
            ))}
          </select>
          {errors.sender?.message && (
            <p className="text-xs text-red-400">
              {errors.sender.message.toString()}
            </p>
          )}
        </div>

        {/* Recipient Dropdown */}
        <div className="flex flex-col gap-2 w-full md:w-[48%]">
          <label className="text-xs text-gray-500">Kimga (Qabul qiluvchi)</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("recipient")}
            defaultValue={data?.recipient}
          >
            <option value="">Qabul qiluvchini tanlang</option>
            {allUsers.map((user, index) => (
              <option key={index} value={user.name}>
                {user.name} ({user.role})
              </option>
            ))}
          </select>
          {errors.recipient?.message && (
            <p className="text-xs text-red-400">
              {errors.recipient.message.toString()}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2 w-full">
          <InputField
            label="Mavzu"
            name="subject"
            defaultValue={data?.subject}
            register={register}
            error={errors?.subject}
          />
        </div>

        {/* Message Body */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs text-gray-500">Xabar</label>
          <textarea
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full min-h-[150px]"
            {...register("message")}
            defaultValue={data?.message}
            placeholder="Xabaringizni shu yerga yozing..."
          />
          {errors.message?.message && (
            <p className="text-xs text-red-400">
              {errors.message.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Xabar yuborish" : "Xabarni yangilash"}
      </button>
    </form>
  );
};

export default MessageForm;
