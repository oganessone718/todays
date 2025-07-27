"use client";

import { useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { TodayFormValues } from "@/mock/todayMockData";

const ContentInput = ({
  register,
}: {
  register: UseFormRegister<TodayFormValues>;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { ref, onChange, ...rest } = register("content");

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className="flex flex-1 p-[16px] gap-[4px]">
      <textarea
        ref={(e) => {
          ref(e);
          textareaRef.current = e;
          adjustTextareaHeight();
        }}
        rows={1}
        placeholder="내용을 입력해주세요."
        className="flex-1 focus:outline-none text-[14px] font-regular resize-none overflow-hidden"
        {...rest}
        onChange={(e) => {
          onChange(e);
          adjustTextareaHeight();
        }}
      />
    </div>
  );
};

export default ContentInput;
