"use client";

import BackButton from "@/components/common/button/BackButton";
import Header from "@/components/common/layout/Header";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import MentionSetting from "@/components/features/create/settings/MentionSetting";
import TagSetting from "@/components/features/create/settings/TagSetting";
import VisibilitySetting from "@/components/features/create/settings/VisibilitySetting";
import { useUser } from "@/hooks/useUser";
import { createToday } from "@/lib/client/today";
import { loginId } from "@/mock/mockData";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useRouter } from "next/navigation";

const CreateSettings = () => {
  const { tmpToday, resetTmpToday } = useTmpTodayStore();
  const { user } = useUser(loginId);
  const router = useRouter();

  const onSubmit = async () => {
    if (!user) return;
    const newToday = await createToday(user.id, tmpToday);
    router.push(`/diary/${user.id}/today/${newToday.id}`);
    resetTmpToday();
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      <Header
        left={<BackButton iconType="arrow" />}
        center={<span className="text-lg font-medium">To.Day 상세 설정</span>}
      />
      <div className="flex-1 flex flex-col">
        <TagSetting
          onClick={() => {
            router.push("/create/settings/tag");
          }}
        />
        <MentionSetting
          onClick={() => {
            router.push("/create/settings/mention");
          }}
        />
        <VisibilitySetting
          onClick={() => {
            router.push("/create/settings/visibility");
          }}
        />
        <CreateSettingsBottomBar buttonText="등록하기" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateSettings;
