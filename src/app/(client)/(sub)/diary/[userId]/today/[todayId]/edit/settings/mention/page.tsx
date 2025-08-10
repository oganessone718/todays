"use client";

import Dropdown from "@/components/common/Dropdown";
import BackButton from "@/components/common/button/BackButton";
import IconButton from "@/components/common/button/IconButton";
import InputBar from "@/components/common/input/InputBar";
import Header from "@/components/common/layout/Header";
import UserSelectRow from "@/components/common/user/UserSelectRow";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import { useFriend } from "@/hooks/useFriend";
import { useFriendsGroup } from "@/hooks/useFriendsGroup";
import { useUser } from "@/hooks/useUser";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const total = "전체 친구";

const EditSettingsMention = () => {
  const { setTmpToday, tmpToday } = useTmpTodayStore();

  const router = useRouter();
  const params = useParams();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mentions, setMentions] = useState<string[]>(tmpToday.mentions);
  const [tmpSearchText, setTmpSearchText] = useState("");
  const [isAllCheckedMap, setIsAllCheckedMap] = useState<
    Record<string, boolean>
  >({});

  const user = useUser();
  if (!user) return <p>Loading...</p>;

  const { friendsGroups } = useFriendsGroup(user?.id ?? null);

  const {
    friends,
    selectedFriendsGroup,
    setSelectedFriendsGroup,
    setSearchText,
  } = useFriend(user?.id ?? null);

  const getCurrentGroupId = () => selectedFriendsGroup?.id ?? total;

  useEffect(() => {
    setIsAllCheckedMap((prev) => ({
      ...prev,
      [getCurrentGroupId()]: friends
        .map((friend) => friend.id)
        .every((friendId) => mentions.includes(friendId)),
    }));
  }, [mentions, friends]);

  const onSearch = () => {
    setSearchText(tmpSearchText.trim());
    setTmpSearchText(tmpSearchText.trim());
  };

  const onGroupSelect = (name: string) => {
    if (name === total) {
      setSelectedFriendsGroup(null);
    } else {
      const group = friendsGroups.find((fg) => fg.name === name);
      if (group) setSelectedFriendsGroup(group);
    }
  };

  const onUserSelect = (id: string) => {
    setMentions((prev: string[]) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const onAllClick = () => {
    const currentGroupId = getCurrentGroupId();
    const isCheckedNow = !isAllCheckedMap[currentGroupId];

    setIsAllCheckedMap((prev) => ({
      ...prev,
      [currentGroupId]: isCheckedNow,
    }));

    setMentions((prev: string[]) => {
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
    <div className="flex flex-col flex-1">
      {isSearchOpen ? (
        <Header
          left={
            <IconButton
              iconName="arrow_left_alt"
              onClick={() => {
                setIsSearchOpen(false);
                setTmpSearchText("");
                setSearchText("");
              }}
            />
          }
          center={
            <InputBar
              placeholder="친구를 검색해보세요."
              inputText={tmpSearchText}
              onChange={setTmpSearchText}
              onEnterPress={onSearch}
              rightIcon={
                <span
                  className={
                    "icons-default icons-filled icons-small text-gray-700 font-bold cursor-pointer"
                  }
                  onClick={onSearch}
                >
                  search
                </span>
              }
            />
          }
        />
      ) : (
        <Header
          left={<BackButton iconType="x" />}
          center={<span className="text-lg font-medium">멘션 수정</span>}
          right={
            <IconButton
              iconName="search"
              onClick={() => {
                setIsSearchOpen(true);
              }}
            />
          }
        />
      )}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="flex flex-row pl-[8px] py-[12px] bg-gray-50 border-b-[1px] border-gray-100 justify-between pr-[16px]">
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
        <div className="flex flex-col">
          {friends.map((friend) => {
            return (
              <UserSelectRow
                key={friend.id}
                user={friend}
                isSelected={mentions.includes(friend.id)}
                onSelect={onUserSelect}
              />
            );
          })}
        </div>
        <CreateSettingsBottomBar
          buttonText="완료"
          onClick={() => {
            setTmpToday({ mentions: mentions });
            router.push(
              `/diary/${params.userId?.toString()}/today/${params.todayId?.toString()}/edit/settings`
            );
          }}
        />
      </div>
    </div>
  );
};

export default EditSettingsMention;
