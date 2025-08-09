"use client";

import Dropdown from "@/components/common/Dropdown";
import IconButton from "@/components/common/button/IconButton";
import UserSelectRow from "@/components/common/user/UserSelectRow";
import { UserWithoutPassword } from "@/types/users";
import { FriendsGroup } from "@prisma/client";
import { useEffect, useState } from "react";

interface UserContentProps {
  friends: UserWithoutPassword[];
  selectedFriendsGroup: FriendsGroup | null;
  setSelectedFriendsGroup: React.Dispatch<
    React.SetStateAction<FriendsGroup | null>
  >;
  friendsGroups: FriendsGroup[];
  visiblePeople: string[];
  setVisiblePeople: React.Dispatch<React.SetStateAction<string[]>>;
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
      [getCurrentGroupId()]: friends
        .map((friend) => friend.id)
        .every((friendId) => visiblePeople.includes(friendId)),
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
    setVisiblePeople((prev: string[]) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const onAllClick: () => void = () => {
    const currentGroupId = getCurrentGroupId();
    const isCheckedNow = !isAllCheckedMap[currentGroupId];

    setIsAllCheckedMap((prev) => ({
      ...prev,
      [currentGroupId]: isCheckedNow,
    }));

    setVisiblePeople((prev: string[]) => {
      let newMentions = [...prev];
      if (isCheckedNow) {
        friends.forEach((friend) => {
          if (!newMentions.includes(friend.id)) {
            newMentions.push(friend.id);
          }
        });
      } else {
        newMentions = newMentions.filter(
          (id) => !friends.some((friend) => friend.id === id)
        );
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
              isSelected={visiblePeople.includes(friend.id)}
              onSelect={onUserSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserContent;
