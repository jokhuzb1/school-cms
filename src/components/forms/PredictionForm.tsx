"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  studentId: z.coerce.number({ message: "O'quvchi majburiy!" }),
  subject: z.string().min(1, { message: "Fan nomi majburiy!" }),
  score: z.coerce.number().min(0, { message: "Ball majburiy!" }),
  maxScore: z.coerce.number().min(1, { message: "Maksimal ball majburiy!" }),
  note: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

const PredictionForm = ({
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
    defaultValues: {
      studentId: data?.studentId,
    },
  });

  const onSubmit = handleSubmit((data) => {
    // TODO: Implement form submission logic
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Fan bahosini qo'shish" : "Fan bahosini yangilash"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Fan va baho ma&apos;lumotlari
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <input type="hidden" {...register("studentId")} />
        <InputField
          label="Fan"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors.subject}
        />
        <InputField
          label="Ball"
          name="score"
          type="number"
          defaultValue={data?.score}
          register={register}
          error={errors.score}
          inputProps={{ min: 0 }}
        />
        <InputField
          label="Maksimal ball"
          name="maxScore"
          type="number"
          defaultValue={data?.maxScore}
          register={register}
          error={errors.maxScore}
          inputProps={{ min: 1 }}
        />
        <InputField
          label="Izoh"
          name="note"
          defaultValue={data?.note}
          register={register}
          error={errors.note}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Saqlash" : "Yangilash"}
      </button>
    </form>
  );
};

export default PredictionForm;
