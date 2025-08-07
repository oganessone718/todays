import BottomModal from "@/components/common/modal/BottomModal";
import UserTodayRow from "@/components/common/user/UserTodayRow";
import ContentSection from "@/components/features/diary/ContentSection";
import { useToday } from "@/hooks/useToday";
import { useUser } from "@/hooks/useUser";
import { loginId } from "@/mock/mockData";
import { useRouter } from "next/navigation";
import { overlay } from "overlay-kit";
import TagsSection from "./TagsSection";
import TitleSection from "./TitleSection";

const TodayDetail = ({ todayId }: { todayId: string }) => {
  const { user } = useUser(loginId);
  const { today, tags, mentions, deleteTodayByTodayId } = useToday(todayId);

  const router = useRouter();

  return (
    user &&
    today && (
      <div className="border-b-[1px] border-gray-100 bg-white">
        <div className="px-[16px] flex flex-col">
          <UserTodayRow
            user={user}
            visibility="some"
            onClick={() => {
              overlay.open(({ isOpen, close }) => (
                <BottomModal isOpen={isOpen} onClose={close}>
                  <div
                    onClick={() => {
                      deleteTodayByTodayId(today.id);
                      router.push(`/`);
                      close();
                    }}
                    className="w-[100%] text-[18px] text-red p-[16px] flex gap-[8px] justify-center cursor-pointer hover:bg-gray-100 "
                  >
                    <span className="icons-default text-[16px]">delete</span>
                    <p className="text-[18px]">삭제하기</p>
                  </div>
                  <div
                    onClick={() => {
                      router.push(`/diary/${user.id}/today/${today.id}/edit`);
                      close();
                    }}
                    className="w-[100%] p-[16px] text-gray-900 flex gap-[8px] justify-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="icons-default text-[16px]">edit</span>
                    <p className="text-[18px]">수정하기</p>
                  </div>
                </BottomModal>
              ));
            }}
            isMine={user.id === today?.userId}
          />
          <div className="flex flex-col">
            <TitleSection
              emojiUrl={today.emojiUrl}
              title={today.title}
              createdAt={today.createdAt}
            />
            <ContentSection content={today.content} />
            <TagsSection mentions={mentions} tags={tags} />
          </div>
        </div>
      </div>
    )
  );
};

export default TodayDetail;
