"use client";

import { useRouter } from "next/navigation";
import Setting from "./_atomic/Setting";
import useTmpTodayStore from "@/store/useTmpTodayStore";

const HashSetting = () => {
  const router = useRouter();
  const { tmpToday } = useTmpTodayStore();
  
  return (
    <Setting
      icon="grid_3x3"
      text="태그를 추가해보세요."
      description={tmpToday.tags.length > 0 ? `${tmpToday.tags.length}개` : ""}
      onClick={() => {
        router.push("/create/settings/hash");
      }}
    />
  );
};

export default HashSetting;
