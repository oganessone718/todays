"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useRouter } from "next/navigation";
import Setting from "./_atomic/Setting";

const MentionSetting = () => {
  const router = useRouter();
  const { tmpToday } = useTmpTodayStore();

  return (
    <Setting
      icon="group"
      text="함께 한 사람을 멘션해보세요."
      description={tmpToday.mentions.size > 0 ? `${tmpToday.mentions.size}명` : ""}
      onClick={() => {
        router.push("/create/settings/mention");
      }}
    />
  );
};

export default MentionSetting;
