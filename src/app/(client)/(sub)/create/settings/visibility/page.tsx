"use client";

import BackButton from "@/components/common/button/BackButton";
import IconButton from "@/components/common/button/IconButton";
import InputBar from "@/components/common/input/InputBar";
import Header from "@/components/common/layout/Header";
import IconToggle from "@/components/common/toggle/IconToggle";
import CreateSettingsBottomBar from "@/components/features/create/CreateSettingBottomBar";
import GroupContent from "@/components/features/create/settings/visibility/GroupContent";
import UserContent from "@/components/features/create/settings/visibility/UserContent";
import { useFriend } from "@/hooks/useFriend";
import { useFriendsGroup } from "@/hooks/useFriendsGroup";
import { useUser } from "@/hooks/useUser";
import { loginId } from "@/mock/mockData";
import useTmpTodayStore from "@/store/useTmpTodayStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateSettingsVisibility = () => {
  const router = useRouter();

  const { setTmpToday, tmpToday } = useTmpTodayStore();
  const [visibleGroups, setVisibleGroups] = useState<Set<string>>(
    tmpToday.visibleGroups
  );
  const [visiblePeople, setVisiblePeople] = useState<Set<string>>(
    tmpToday.visiblePeople
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [tmpSearchText, setTmpSearchText] = useState("");
  const [viewMode, setViewMode] = useState("group");

  const { user } = useUser(loginId);
  const { friendsGroups, setSearchText: setFriendsGroupSearchText } =
    useFriendsGroup(user?.id ?? null);
  const {
    friends,
    selectedFriendsGroup,
    setSelectedFriendsGroup,
    setSearchText: setUserSearchText,
  } = useFriend(user?.id ?? null);

  const onSearch = () => {
    if (viewMode === "group") {
      setFriendsGroupSearchText(tmpSearchText.trim());
    } else {
      setUserSearchText(tmpSearchText.trim());
    }
    setTmpSearchText(tmpSearchText.trim());
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
                setUserSearchText("");
                setFriendsGroupSearchText("");
              }}
            />
          }
          center={
            <InputBar
              placeholder={
                viewMode === "group"
                  ? "그룹을 검색해보세요."
                  : "친구를 검색해보세요."
              }
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
          center={<span className="text-lg font-medium">공개 범위 설정</span>}
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
        {viewMode === "group" ? (
          <GroupContent
            friendsGroups={friendsGroups}
            visibleGroups={visibleGroups}
            setVisibleGroups={setVisibleGroups}
          />
        ) : (
          <UserContent
            friends={friends}
            selectedFriendsGroup={selectedFriendsGroup}
            setSelectedFriendsGroup={setSelectedFriendsGroup}
            friendsGroups={friendsGroups}
            visiblePeople={visiblePeople}
            setVisiblePeople={setVisiblePeople}
          />
        )}
        <CreateSettingsBottomBar
          left={
            <IconToggle
              options={["group", "person"]}
              selected={viewMode}
              onSelect={setViewMode}
            />
          }
          buttonText="완료"
          onClick={() => {
            const visibleWithUser = new Set(visiblePeople);
            if (user) visibleWithUser.add(user.id);
            setTmpToday({
              visiblePeople: visibleWithUser,
              visibleGroups: visibleGroups,
            });
            router.push("/create/settings");
          }}
        />
      </div>
    </div>
  );
};

export default CreateSettingsVisibility;
