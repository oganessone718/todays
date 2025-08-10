"use client";

import BackButton from "@/components/common/button/BackButton";
import Header from "@/components/common/layout/Header";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import MentionSetting from "@/components/features/create/settings/MentionSetting";
import TagSetting from "@/components/features/create/settings/TagSetting";
import VisibilitySetting from "@/components/features/create/settings/VisibilitySetting";
import { useUser } from "@/hooks/useUser";
import { updateToday } from "@/lib/client/today";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useParams, useRouter } from "next/navigation";

const EditSettings = () => {
  const { tmpToday, resetTmpToday } = useTmpTodayStore();

  const user = useUser();
  if (!user) return <p>Loading...</p>;

  const params = useParams();
  const router = useRouter();

  const onSubmit = async () => {
    if (!user) return;
    if (!params.todayId?.toString()) return;
    const updatedToday = await updateToday({
      userId: user.id,
      todayId: params.todayId?.toString() ?? "",
      tmpTodayData: tmpToday,
    });
    router.push(`/diary/${user.id}/today/${updatedToday.id}`);
    resetTmpToday();
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      <Header
        left={<BackButton iconType="arrow" />}
        center={
          <span className="text-lg font-medium">To.Day 상세 설정 수정</span>
        }
      />
      {user && (
        <div className="flex-1 flex flex-col">
          <TagSetting
            onClick={() => {
              router.push(
                `/diary/${user.id}/today/${
                  params.todayId?.toString() ?? ""
                }/edit/settings/tag`
              );
            }}
          />
          <MentionSetting
            onClick={() => {
              router.push(
                `/diary/${user.id}/today/${
                  params.todayId?.toString() ?? ""
                }/edit/settings/mention`
              );
            }}
          />
          <VisibilitySetting
            onClick={() => {
              router.push(
                `/diary/${user.id}/today/${
                  params.todayId?.toString() ?? ""
                }/edit/settings/visibility`
              );
            }}
          />
          <CreateSettingsBottomBar buttonText="수정하기" onClick={onSubmit} />
        </div>
      )}
    </div>
  );
};

export default EditSettings;
