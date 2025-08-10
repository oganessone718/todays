import IconButton from "@/components/common/button/IconButton";
import VisibilityTag from "@/components/common/tag/VisibilityTag";
import { UserWithoutPassword } from "@/types/users";
import UserRow from "./_atomic/UserRow";

interface UserTodayRowProps {
  user: UserWithoutPassword;
  visibility: "all" | "some" | "none";
  isMine: boolean;
  onClick: () => void;
}

const UserTodayRow = ({
  user,
  visibility,
  isMine,
  onClick,
}: UserTodayRowProps) => {
  const VisibilityAndMenu = () => {
    return (
      <div className="flex flex-row gap-[4px] items-center">
        {visibility !== "all" && <VisibilityTag visibilityType={visibility} />}
        {isMine && <IconButton iconName="more_vert" onClick={onClick} />}
      </div>
    );
  };

  return <UserRow user={user} right={VisibilityAndMenu()} />;
};

export default UserTodayRow;
