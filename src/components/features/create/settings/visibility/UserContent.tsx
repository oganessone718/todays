"use client";

import Dropdown from "@/components/common/Dropdown";
import IconButton from "@/components/common/button/IconButton";
import UserSelectRow from "@/components/common/user/UserSelectRow";
import { isSubset } from "@/utils/set";
import { FriendsGroup, User } from "@prisma/client";
import { useEffect, useState } from "react";

interface UserContentProps {
  friends: User[];
  selectedFriendsGroup: FriendsGroup | null;
  setSelectedFriendsGroup: React.Dispatch<
    React.SetStateAction<FriendsGroup | null>
  >;
  friendsGroups: FriendsGroup[];
  visiblePeople: Set<string>;
  setVisiblePeople: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const total = "전체 친구";

const UserContent = ({
  friends,
  selectedFriendsGroup,
  setSelectedFriendsGroup,
  friendsGroups,
  visiblePeople,
  setVisiblePeople,
}: UserContentProps) => {
  const [isAllCheckedMap, setIsAllCheckedMap] = useState<
    Record<string, boolean>
  >({});

  const getCurrentGroupId = () => selectedFriendsGroup?.id ?? total;

  useEffect(() => {
    setIsAllCheckedMap((prev) => ({
      ...prev,
      [getCurrentGroupId()]: isSubset({
        subSet: new Set(friends.map((friend) => friend.id)),
        set: visiblePeople,
      }),
    }));
  }, [visiblePeople, friends]);

  const onGroupSelect = (name: string) => {
    if (name === total) {
      setSelectedFriendsGroup(null);
    } else {
      const group = friendsGroups.find((fg) => fg.name === name);
      if (group) setSelectedFriendsGroup(group);
    }
  };

  const onUserSelect = (id: string) => {
    setVisiblePeople((prev: Set<string>) => {
      const newSet = new Set(prev);
      if (prev.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const onAllClick: () => void = () => {
    const currentGroupId = getCurrentGroupId();
    const isCheckedNow = !isAllCheckedMap[currentGroupId];

    setIsAllCheckedMap((prev) => ({
      ...prev,
      [currentGroupId]: isCheckedNow,
    }));

    setVisiblePeople((prev) => {
      const newMentions = new Set(prev);
      if (isCheckedNow) {
        friends.forEach((friend) => newMentions.add(friend.id));
      } else {
        friends.forEach((friend) => newMentions.delete(friend.id));
      }
      return newMentions;
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex flex-row pl-[8px] py-[12px] bg-gray-50 border-b-[1px] border-gray-100 justify-between pr-[16px] items-center">
        <Dropdown
          selected={selectedFriendsGroup ? selectedFriendsGroup.name : total}
          options={[
            total,
            ...friendsGroups.map((fg) => {
              return fg.name;
            }),
          ]}
          onSelect={onGroupSelect}
        />
        <div className="ml-auto">
          <IconButton
            color="gray-900"
            filled={true}
            iconName={
              friends.length > 0 && isAllCheckedMap[getCurrentGroupId()]
                ? "check_box"
                : "check_box_outline_blank"
            }
            onClick={onAllClick}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {friends.map((friend) => {
          return (
            <UserSelectRow
              key={friend.id}
              user={friend}
              isSelected={visiblePeople.has(friend.id)}
              onSelect={onUserSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserContent;
