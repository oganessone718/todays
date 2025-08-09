"use client";

import FriendsGroupSelectRow from "@/components/common/friendsGroup/FriendsGroupSelectRow";
import { FriendsGroup } from "@prisma/client";

interface GroupContent {
  visibleGroups: string[];
  setVisibleGroups: React.Dispatch<React.SetStateAction<string[]>>;
  friendsGroups: FriendsGroup[];
}

const GroupContent = ({
  visibleGroups,
  setVisibleGroups,
  friendsGroups,
}: GroupContent) => {
  const onGroupSelect = (id: string) => {
    setVisibleGroups((prev: string[]) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex flex-col">
        {friendsGroups.map((friendsGroup) => (
          <FriendsGroupSelectRow
            key={friendsGroup.id}
            friendsGroup={friendsGroup}
            isSelected={visibleGroups.includes(friendsGroup.id)}
            onSelect={onGroupSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupContent;
