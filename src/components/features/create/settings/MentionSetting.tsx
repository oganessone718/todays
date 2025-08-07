"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import Setting from "./_atomic/Setting";

const MentionSetting = ({ onClick }: { onClick: () => void }) => {
  const { tmpToday } = useTmpTodayStore();

  return (
    <Setting
      icon="group"
      text="함께 한 사람을 멘션해보세요."
      description={
        tmpToday.mentions.size > 0 ? `${tmpToday.mentions.size}명` : ""
      }
      onClick={onClick}
    />
  );
};

export default MentionSetting;
