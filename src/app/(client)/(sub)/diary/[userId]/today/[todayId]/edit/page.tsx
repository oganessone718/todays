"use client";

import BackButton from "@/components/common/button/BackButton";
import Header from "@/components/common/layout/Header";
import ContentInput from "@/components/features/create/ContentInput";
import CreateBottomBar from "@/components/features/create/CreateBottomBar";
import DateEmojiInput from "@/components/features/create/DateEmojiInput";
import TitleInput from "@/components/features/create/TitleInput";
import { useToday } from "@/hooks/useToday";
import useTmpTodayStore, { TmpTodayValues } from "@/store/useTmpTodayStore";
import { formatMonthDateForCreate } from "@/utils/date";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const DiaryTodayEdit = () => {
  const params = useParams();

  const { today, tags, mentions, visiblePeople, visibleGroups, isLoading } =
    useToday(params.todayId?.toString());

  const { tmpToday, setTmpToday } = useTmpTodayStore();
  const { register, handleSubmit, watch, setValue, reset } =
    useForm<TmpTodayValues>({
      defaultValues: tmpToday,
    });

  useEffect(() => {
    if (!isLoading) {
      reset({
        title: today?.title,
        content: today?.content,
        date: formatMonthDateForCreate(today?.date ?? ""),
        emojiUrl: today?.emojiUrl,
        mentions: new Set(mentions?.map((mention) => mention.id)),
        tags: new Set(tags?.map((tag) => tag.name)),
        visiblePeople: new Set(
          visiblePeople?.map((visiblePerson) => visiblePerson.id)
        ),
        visibleGroups: new Set(
          visibleGroups?.map((visibleGroup) => visibleGroup.id)
        ),
      });
    }
  }, [today, tags, mentions]);

  const router = useRouter();

  const saveToDay = (data: TmpTodayValues) => {
    setTmpToday(data);
    router.push(
      `/diary/${params.userId?.toString()}/today/${params.todayId?.toString()}/edit/settings`
    );
  };

  return (
    <div className="flex flex-col flex-1">
      <Header
        left={<BackButton iconType="x" />}
        center={<span className="text-lg font-medium">To.Day 수정</span>}
      />
      {!isLoading && (
        <form
          onSubmit={handleSubmit(saveToDay)}
          className="flex-1 flex flex-col"
        >
          <DateEmojiInput
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <TitleInput register={register} watch={watch} />
          <ContentInput register={register} />
          <CreateBottomBar watch={watch} />
        </form>
      )}
    </div>
  );
};
export default DiaryTodayEdit;
