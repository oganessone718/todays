"use client";

import IconButton from "@/components/common/button/IconButton";
import Header from "@/components/common/layout/Header";
import CommentReactionBar from "@/components/common/today/CommentReaction";
import TodayDetail from "@/components/common/today/TodayDetail";
import { useToday } from "@/hooks/useToday";
import { useUser } from "@/hooks/useUser";
import { loginId } from "@/mock/mockData";
import { formatMonthDate } from "@/utils/date";
import { useParams, useRouter } from "next/navigation";

const DiaryToday = () => {
  const router = useRouter();

  const params = useParams();
  const { user } = useUser(loginId);

  const { today, reactions, comments } = useToday(params.todayId?.toString());

  const isMine = user?.id === today?.userId;

  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      <Header
        left={
          <IconButton
            iconName="close"
            onClick={() => {
              router.push("/");
            }}
          />
        }
        center={
          <span className="text-lg font-medium">
            {today &&
              (isMine ? "나의 " : `${user?.nickname}의 `) +
                `${formatMonthDate(today?.date)}` +
                " To.Day"}
          </span>
        }
      />
      {params.todayId && <TodayDetail todayId={params.todayId.toString()} />}
      <CommentReactionBar
        reactionsCount={reactions?.length ?? 0}
        commentsCount={comments?.length ?? 0}
      />
    </div>
  );
};

export default DiaryToday;
