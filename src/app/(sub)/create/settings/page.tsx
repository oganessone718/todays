import Header from "@/components/common/layout/Header";
import BackButton from "@/components/common/button/BackButton";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import HashSetting from "@/components/features/create/settings/HashSetting";
import MentionSetting from "@/components/features/create/settings/MentionSetting";
import VisibilitySetting from "@/components/features/create/settings/VisibilitySetting";

const CreateSettings = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      <Header
        left={<BackButton iconType="arrow" />}
        center={<span className="text-lg font-medium">To.Day 상세 설정</span>}
      />
      <div className="flex-1 flex flex-col">
        <HashSetting />
        <MentionSetting />
        <VisibilitySetting />
        <CreateSettingsBottomBar />
      </div>
    </div>
  );
};

export default CreateSettings;
