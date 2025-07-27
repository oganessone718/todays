import Button from "@/components/common/button/Button";
import IconButton from "@/components/common/button/IconButton";

import { UseFormWatch } from "react-hook-form";
import { TodayFormValues } from "@/mock/todayMockData";

const CreateBottomBar = ({
  watch,
}: {
  watch: UseFormWatch<TodayFormValues>;
}) => {
  return (
    <div>
      <div className="flex text-bas justify-end border-t-[1px] border-gray-300 bg-white fixed bottom-0 w-full px-[16px] py-[10px] gap-[12px] z-50">
        <IconButton iconName="add_photo_alternate" />
        <Button
          type="submit"
          text="다음"
          activated={
            watch("date") != "" &&
            watch("title") != "" &&
            watch("content") != "" &&
            watch("emojiUrl") != ""
              ? true
              : false
          }
          icon={
            <div className="flex items-center justify-center h-[16px] w-[16px]">
              <span
                className={"icons-default icons-filled icons-small font-black "}
              >
                arrow_right_alt
              </span>
            </div>
          }
        />
      </div>
      <div className="h-[57px]"></div>
    </div>
  );
};

export default CreateBottomBar;
