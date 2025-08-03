"use client";

import Button from "@/components/common/button/Button";
import React from "react";

interface CreateSettingsBottomBarProps {
  left?: React.ReactNode;
  buttonText: string;
  onClick: () => void;
}

const CreateSettingsBottomBar = ({
  left = null,
  buttonText,
  onClick,
}: CreateSettingsBottomBarProps) => {
  return (
    <div>
      <div className="flex border-t-[1px] border-gray-300 bg-white fixed bottom-0 w-full px-[16px] py-[10px] gap-[12px] z-50 items-center">
        {left}
        <div className="ml-auto">
          <Button text={buttonText} onClick={onClick} />
        </div>
      </div>
      {/* spacer */}
      <div className="h-[57px]"></div>
    </div>
  );
};

export default CreateSettingsBottomBar;
