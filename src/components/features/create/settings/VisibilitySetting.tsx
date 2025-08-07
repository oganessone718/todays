"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import Setting from "./_atomic/Setting";

const VisibilitySetting = ({ onClick }: { onClick: () => void }) => {
  const { tmpToday } = useTmpTodayStore();

  const visibilityDescription = () => {
    const visiblesLength =
      tmpToday.visibleGroups.size + tmpToday.visiblePeople.size;
    if (visiblesLength === 0) {
      return "전체 공개";
    } else if (visiblesLength === 1) {
      return "비공개";
    } else {
      return "일부 공개";
    }
  };

  return (
    <Setting
      icon="lock"
      text="공개 범위를 설정해보세요."
      description={visibilityDescription()}
      onClick={onClick}
    />
  );
};

export default VisibilitySetting;
