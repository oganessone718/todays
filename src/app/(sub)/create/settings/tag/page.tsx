"use client";

import BackButton from "@/components/common/button/BackButton";
import InputBar from "@/components/common/input/InputBar";
import Header from "@/components/common/layout/Header";
import DeletableTag from "@/components/common/tag/DeletableTag";
import CreateSettingsTagBottomBar from "@/components/features/create/settings/tag/CreateSettingTagBottomBar";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateSettingsTag = () => {
  const { setTmpToday, tmpToday } = useTmpTodayStore();

  const router = useRouter();

  const [tags, setTags] = useState<string[]>(tmpToday.tags);
  const [tag, setTag] = useState("");

  const onEnterPress = () => {
    setTags((tags) => (tags.includes(tag) ? tags : [...tags, tag]));
    setTag("");
  };

  return (
    <div className="flex flex-col flex-1">
      <Header
        left={<BackButton iconType="x" />}
        center={<span className="text-lg font-medium">태그 추가</span>}
      />
      <div className="flex-1 flex flex-col">
        <div className="px-[8px] py-[12px] bg-gray-50 border-b-[1px] border-gray-100">
          <InputBar
            placeholder="Enter로 태그 추가"
            inputText={tag}
            onChange={setTag}
            onEnterPress={onEnterPress}
            leftIcon={
              <span
                className={
                  "icons-default icons-filled icons-small text-gray-700 font-bold cursor-default"
                }
              >
                grid_3x3
              </span>
            }
          />
        </div>
        <div className="flex flex-col gap-[12px] p-[12px]">
          {tags.map((tag, index) => {
            return (
              <DeletableTag
                text={tag}
                key={index}
                onDelete={() => {
                  setTags((tags) => tags.filter((t) => t !== tag));
                }}
              />
            );
          })}
        </div>
        <CreateSettingsTagBottomBar
          onClick={() => {
            setTmpToday({ tags: tags });
            router.push("/create/settings");
          }}
        />
      </div>
    </div>
  );
};

export default CreateSettingsTag;
