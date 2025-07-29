"use client";

import { useRouter } from "next/navigation";
import Setting from "./_atomic/Setting";
import useTmpTodayStore from "@/store/useTmpTodayStore";

const VisibilitySetting = () => {
  const router = useRouter();
  const { tmpToday } = useTmpTodayStore();

  const visibilityDescription = () => {
    const visiblesLength = tmpToday.visibles.length;
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
      onClick={() => {
        router.push("/create/settings/visibility");
      }}
    />
  );
};

export default VisibilitySetting;
