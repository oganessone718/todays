import Image from "next/image";

import IconButton from "@/components/common/button/IconButton";
import EmojiPickerModal from "@/components/common/modal/EmojiPickerModal";
import { TmpTodayValues } from "@/store/useTmpTodayStore";

import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { overlay } from "overlay-kit";
import { EmojiClickData } from "emoji-picker-react";

export interface DateEmojiInputProps {
  register: UseFormRegister<TmpTodayValues>;
  setValue: UseFormSetValue<TmpTodayValues>;
  watch: UseFormWatch<TmpTodayValues>;
}

const DateEmojiInput = ({ register, setValue, watch }: DateEmojiInputProps) => {
  const emojiUrl = watch("emojiUrl");

  const onEmojiSelect = (emojiData: EmojiClickData) => {
    setValue("emojiUrl", emojiData.imageUrl);
  };

  return (
    <div className="flex flex-row items-center p-[16px] gap-[4px] border-b-[1px] border-gray-100 bg-white justify-between">
      <input
        type="date"
        className="focus:outline-none"
        {...register("date", { required: true })}
      />
      {emojiUrl ? (
        <Image
          src={emojiUrl}
          alt="gift heart emoji"
          width={24}
          height={24}
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <EmojiPickerModal
                isOpen={isOpen}
                onClose={close}
                onEmojiSelect={onEmojiSelect}
              />
            ));
          }}
        />
      ) : (
        <IconButton
          iconName="add_reaction"
          type="button"
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <EmojiPickerModal
                isOpen={isOpen}
                onClose={close}
                onEmojiSelect={onEmojiSelect}
              />
            ));
          }}
        />
      )}
    </div>
  );
};

export default DateEmojiInput;
