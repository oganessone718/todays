"use client";

import FriendsGroupSelectRow from "@/components/common/friendsGroup/FriendsGroupSelectRow";
import { FriendsGroup } from "@prisma/client";

interface GroupContent {
  visibleGroups: Set<string>;
  setVisibleGroups: React.Dispatch<React.SetStateAction<Set<string>>>;
  friendsGroups: FriendsGroup[];
}

const GroupContent = ({
  visibleGroups,
  setVisibleGroups,
  friendsGroups,
}: GroupContent) => {
  const onGroupSelect = (id: string) => {
    setVisibleGroups((prev) => {
      const newSet = new Set(prev);
      if (prev.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex flex-col">
        {friendsGroups.map((friendsGroup) => (
          <FriendsGroupSelectRow
            key={friendsGroup.id}
            friendsGroup={friendsGroup}
            isSelected={visibleGroups.has(friendsGroup.id)}
            onSelect={onGroupSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupContent;
