import React, { ChangeEvent, KeyboardEvent } from "react";

export interface InputBarProps {
  inputText: string;
  onChange: (value: string) => void;
  leftIcon?: React.ReactNode;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  onEnterPress?: () => void;
}

const InputBar = ({
  inputText,
  onChange,
  leftIcon = null,
  placeholder = "입력해주세요.",
  rightIcon = null,
  onEnterPress = () => {},
}: InputBarProps) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <div className="select-none min-w-0 flex-1 flex flex-row items-center px-[16px] py-[8px] gap-[8px] bg-gray-100 rounded-[15px]">
      {leftIcon}
      <input
        type="text"
        value={inputText}
        placeholder={placeholder}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        className="flex-1 focus:outline-none text-[16px] font-medium min-w-0"
      />
      {rightIcon}
    </div>
  );
};

export default InputBar;
