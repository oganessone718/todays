"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import Setting from "./_atomic/Setting";

const VisibilitySetting = ({ onClick }: { onClick: () => void }) => {
  const { tmpToday } = useTmpTodayStore();

  // TODO: 비공개 추가하면 수정
  const visibilityDescription = () => {
    const visiblesLength =
      tmpToday.visibleGroups.length + tmpToday.visiblePeople.length;
    if (visiblesLength === 0) {
      return "전체 공개";
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
