"use client";

import BackButton from "@/components/common/button/BackButton";
import InputBar from "@/components/common/input/InputBar";
import Header from "@/components/common/layout/Header";
import DeletableTag from "@/components/common/tag/DeletableTag";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateSettingsTag = () => {
  const { setTmpToday, tmpToday } = useTmpTodayStore();

  const router = useRouter();

  const [tags, setTags] = useState<Set<string>>(tmpToday.tags);
  const [tag, setTag] = useState("");

  const onEnterPress = () => {
    setTags((prev) => {
      const newSet = new Set(prev);
      newSet.add(tag);
      return newSet;
    });
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
          {[...tags].map((tag) => (
            <DeletableTag
              key={tag}
              text={tag}
              onDelete={() => {
                setTags((prev) => {
                  const newTags = new Set(prev);
                  newTags.delete(tag);
                  return newTags;
                });
              }}
            />
          ))}
        </div>
        <CreateSettingsBottomBar
          buttonText="완료"
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
