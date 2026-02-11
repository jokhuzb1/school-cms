"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Foydalanuvchi nomi kamida 3 ta belgidan iborat bo'lishi kerak!" })
    .max(20, { message: "Foydalanuvchi nomi ko'pi bilan 20 ta belgidan iborat bo'lishi kerak!" }),
  email: z.string().email({ message: "Noto'g'ri email manzil!" }),
  password: z
    .string()
    .min(8, { message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak!" }),
  firstName: z.string().min(1, { message: "Ism majburiy!" }),
  lastName: z.string().min(1, { message: "Familiya majburiy!" }),
  phone: z.string().min(1, { message: "Telefon majburiy!" }),
  address: z.string().min(1, { message: "Manzil majburiy!" }),
  bloodType: z.string().min(1, { message: "Qon guruhi majburiy!" }),
  birthday: z.date({ message: "Tug'ilgan sana majburiy!" }),
  sex: z.enum(["male", "female"], { message: "Jinsi majburiy!" }),
  img: z.instanceof(File, { message: "Rasm majburiy" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
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
      <h1 className="text-xl font-semibold">Yangi o&apos;qituvchi yaratish</h1>
      <span className="text-xs text-gray-400 font-medium">
        Autentifikatsiya ma&apos;lumotlari
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Foydalanuvchi nomi"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Parol"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Shaxsiy ma&apos;lumotlar
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Ism"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Familiya"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Telefon"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Manzil"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Qon guruhi"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Tug&apos;ilgan sana"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Jinsi</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Rasm yuklash</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
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

export default TeacherForm;
