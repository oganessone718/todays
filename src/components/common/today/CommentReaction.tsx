"use client";

import IconButton from "@/components/common/button/IconButton";
import { useParams, useRouter } from "next/navigation";

const CommentReactionBar = ({
  commentsCount,
  reactionsCount,
}: {
  commentsCount: number;
  reactionsCount: number;
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div>
      <div className="flex justify-end border-t-[1px] border-gray-300 bg-white fixed bottom-0 w-full px-[16px] py-[10px] gap-[12px] z-50 text-gray-900">
        <div
          className="flex items-center gap-[4px]"
          onClick={() => {
            router.push(`${params.todayId}/comments`);
          }}
        >
          <IconButton iconName="sms" />
          <p className="text-base font-regular">{commentsCount}</p>
        </div>
        <div
          className="flex items-center gap-[4px]"
          onClick={() => {
            router.push(`${params.todayId}/reactions`);
          }}
        >
          <IconButton iconName="mood" />
          <p className="text-base font-regular">{reactionsCount}</p>
        </div>
      </div>
      {/* spacer */}
      <div className="h-[57px]"></div>
    </div>
  );
};

export default CommentReactionBar;
