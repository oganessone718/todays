"use client";

import { useRouter } from "next/navigation";
import Setting from "./_atomic/Setting";
import useTmpTodayStore from "@/store/useTmpTodayStore";

const MentionSetting = () => {
  const router = useRouter();
  const { tmpToday } = useTmpTodayStore();

  return (
    <Setting
      icon="group"
      text="함께 한 사람을 멘션해보세요."
      description={tmpToday.mentions.length > 0 ? `${tmpToday.tags.length}명` : ""}
      onClick={() => {
        router.push("/create/settings/mention");
      }}
    />
  );
};

export default MentionSetting;
