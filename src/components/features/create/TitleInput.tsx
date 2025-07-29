import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TmpTodayValues } from "@/store/useTmpTodayStore";

export interface TitleInputProps {
  register: UseFormRegister<TmpTodayValues>;
  watch: UseFormWatch<TmpTodayValues>;
  initialValue?: string;
}

const TitleInput = ({ register, watch, initialValue }: TitleInputProps) => {
  const title = initialValue ?? watch("title");

  const titleLength = title ? title.length : 0;

  return (
    <div className="flex flex-row items-center p-[16px] gap-[4px] border-b-[1px] border-gray-100 bg-white">
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        value={title}
        className={`flex-1 focus:outline-none text-[18px] font-medium`}
        {...register("title", { required: true, maxLength: 20 })}
      />
      <span
        className={`text-gray-300 text-[12px] ${
          titleLength > 20 ? "text-red" : ""
        }`}
      >
        {titleLength} / 20
      </span>
    </div>
  );
};

export default TitleInput;
