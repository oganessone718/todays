"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import Setting from "./_atomic/Setting";

const TagSetting = ({ onClick }: { onClick: () => void }) => {
  const { tmpToday } = useTmpTodayStore();

  return (
    <Setting
      icon="grid_3x3"
      text="태그를 추가해보세요."
      description={tmpToday.tags.length > 0 ? `${tmpToday.tags.length}개` : ""}
      onClick={onClick}
    />
  );
};

export default TagSetting;
