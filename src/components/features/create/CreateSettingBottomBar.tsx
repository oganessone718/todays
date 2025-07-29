"use client";

import useTmpTodayStore from "@/store/useTmpTodayStore";
import Button from "@/components/common/button/Button";

const CreateSettingsBottomBar = () => {
  const { tmpToday } = useTmpTodayStore();

  return (
    <div>
      <div className="flex justify-end border-t-[1px] border-gray-300 bg-white fixed bottom-0 w-full px-[16px] py-[10px] gap-[12px] z-50">
        <Button
          type="submit"
          text="등록하기"
          onClick={() => {
            console.log(tmpToday);
          }}
        />
      </div>
      {/* spacer */}
      <div className="h-[57px]"></div>
    </div>
  );
};

export default CreateSettingsBottomBar;
