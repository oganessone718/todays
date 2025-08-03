import type { FriendsGroup } from "@prisma/client";
import FriendsGroupRow from "./_atomic/FriendGroupRow";

interface FriendsGroupSelectRowProps {
  friendsGroup: FriendsGroup;
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

const FriendsGroupSelectRow = ({
  friendsGroup,
  isSelected,
  onSelect,
}: FriendsGroupSelectRowProps) => {
  const checkBox = (isSelected: boolean) => {
    return (
      <span
        className={
          "icons-default icons-filled cursor-pointer font-light " +
          className(isSelected)
        }
        onClick={() => {
          onSelect(friendsGroup.id);
        }}
      >
        {iconName(isSelected)}
      </span>
    );
  };
  return (
    <FriendsGroupRow
      friendsGroup={friendsGroup}
      right={checkBox(isSelected)}
      bgColor={bgColor(isSelected)}
    />
  );
};

export default FriendsGroupSelectRow;
