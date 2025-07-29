"use client";

import Button from "@/components/common/button/Button";

interface CreateSettingsBottomBarProps {
  buttonText: string;
  onClick: () => void;
}

const CreateSettingsBottomBar = ({
  buttonText,
  onClick,
}: CreateSettingsBottomBarProps) => {

  return (
    <div>
      <div className="flex justify-end border-t-[1px] border-gray-300 bg-white fixed bottom-0 w-full px-[16px] py-[10px] gap-[12px] z-50">
        <Button text={buttonText} onClick={onClick} />
      </div>
      {/* spacer */}
      <div className="h-[57px]"></div>
    </div>
  );
};

export default CreateSettingsBottomBar;
