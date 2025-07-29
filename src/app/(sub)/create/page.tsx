"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Header from "@/components/common/layout/Header";
import BackButton from "@/components/common/button/BackButton";
import TitleInput from "@/components/features/create/TitleInput";
import ContentInput from "@/components/features/create/ContentInput";
import CreateBottomBar from "@/components/features/create/CreateBottomBar";
import DateEmojiInput from "@/components/features/create/DateEmojiInput";
import useTmpTodayStore, { TmpTodayValues } from "@/store/useTmpTodayStore";

const Create = () => {
  const { tmpToday, setTmpToday } = useTmpTodayStore();
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: tmpToday,
  });
  const router = useRouter();

  const saveToDay = (data: TmpTodayValues) => {
    router.push("/create/settings");
  };

  return (
    <div className="flex flex-col flex-1">
      <Header
        left={<BackButton iconType="x" />}
        center={<span className="text-lg font-medium">To.Day 작성</span>}
      />
      <form onSubmit={handleSubmit(saveToDay)} className="flex-1 flex flex-col">
        <DateEmojiInput register={register} setValue={setValue} watch={watch} />
        <TitleInput register={register} watch={watch} />
        <ContentInput register={register} />
        <CreateBottomBar watch={watch} />
      </form>
    </div>
  );
};
export default Create;
