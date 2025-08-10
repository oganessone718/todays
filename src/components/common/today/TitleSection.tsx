import { formatDate } from "@/utils/date";
import Image from "next/image";

const TitleSection = ({
  title,
  emojiUrl,
  updatedAt,
}: {
  title: string;
  emojiUrl: string;
  updatedAt: Date;
}) => {
  return (
    <div className="flex flex-col gap-[4px] border-b-[1px] border-gray-100 p-[16px]">
      <div className="flex flex-row justify-between">
        <p className="text-[18px] font-medium">{title}</p>
        <Image src={emojiUrl} alt={emojiUrl} width={24} height={24} />
      </div>
      <p className="text-[12px] text-gray-700">{formatDate(updatedAt)}</p>
    </div>
  );
};

export default TitleSection;
