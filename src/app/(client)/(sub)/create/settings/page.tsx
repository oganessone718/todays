"use client";

import BackButton from "@/components/common/button/BackButton";
import Header from "@/components/common/layout/Header";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import MentionSetting from "@/components/features/create/settings/MentionSetting";
import TagSetting from "@/components/features/create/settings/TagSetting";
import VisibilitySetting from "@/components/features/create/settings/VisibilitySetting";
import useTmpTodayStore from "@/store/useTmpTodayStore";

const CreateSettings = () => {
  const { tmpToday } = useTmpTodayStore();

  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      <Header
        left={<BackButton iconType="arrow" />}
        center={<span className="text-lg font-medium">To.Day 상세 설정</span>}
      />
      <div className="flex-1 flex flex-col">
        <TagSetting />
        <MentionSetting />
        <VisibilitySetting />
        <CreateSettingsBottomBar
          buttonText="등록하기"
          onClick={() => {
            console.log(tmpToday);
          }}
        />
      </div>
    </div>
  );
};

export default CreateSettings;
