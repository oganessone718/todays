"use client";

import { useState } from "react";

interface DropdownProps {
  selected: string;
  options: string[];
  onSelect?: (option: string) => void;
  initOpen?: boolean;
  width?: number;
}

const Dropdown = ({
  selected,
  options,
  onSelect = (_: string) => {},
  initOpen = false,
  width = 120,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(initOpen);
  return (
    <div
      style={{ width: `${width}px` }}
      className={`relative select-none cursor-pointer text-gray-900 text-[14px] font-medium flex-shrink-0`}
    >
      <div
        className={`flex flex-row justify-between rounded-t-[8px] border-[1px] border-gray-100 py-[8px] px-[16px] bg-white
          ${isOpen ? " " : " rounded-b-[8px]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className=" truncate max-w-full">{selected}</p>
        <span className={"icons-default icons-filled icons-small font-black"}>
          {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>

      {isOpen && (
        <div
          style={{ width: `${width}px` }}
          className="absolute rounded-b-[8px] bg-white z-10"
        >
          {options
            .filter((option) => option !== selected)
            .map((option, index, filteredOptions) => {
              const isLast = index === filteredOptions.length - 1;
              return (
                <div
                  key={option}
                  onClick={() => {
                    setIsOpen(false);
                    onSelect(option);
                  }}
                  className={`w-[${width}px] py-[8px] px-[16px] border-x-[1px] border-b-[1px] border-gray-100 hover:bg-gray-50 ${
                    isLast ? "rounded-b-[8px]" : ""
                  }`}
                >
                  {option}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
