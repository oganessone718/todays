import { UserWithoutPassword } from "@/types/users";
import UserRow from "./_atomic/UserRow";

interface UserSelectRowProps {
  user: UserWithoutPassword;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const iconName = (isSelected: boolean) => {
  return isSelected ? "check_box" : "check_box_outline_blank";
};

const className = (isSelected: boolean) => {
  return isSelected ? "text-secondary-700" : "text-gray-900";
};

const bgColor = (isSelected: boolean) => {
  return isSelected ? "secondary" : "white";
};

const UserSelectRow = ({ user, isSelected, onSelect }: UserSelectRowProps) => {
  const checkBox = (isSelected: boolean) => {
    return (
      <span
        className={
          "icons-default icons-filled cursor-pointer font-light " +
          className(isSelected)
        }
        onClick={() => {
          onSelect(user.id);
        }}
      >
        {iconName(isSelected)}
      </span>
    );
  };
  return (
    <UserRow
      user={user}
      right={checkBox(isSelected)}
      bgColor={bgColor(isSelected)}
    />
  );
};

export default UserSelectRow;
