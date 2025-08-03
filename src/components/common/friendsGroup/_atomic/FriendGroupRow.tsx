import { FriendsGroup } from "@prisma/client";
import React from "react";

interface FriendsGroupRowProps {
  friendsGroup: FriendsGroup;
  bgColor?: "white" | "secondary";
  right?: React.ReactNode;
}

const backgroundColor = (bgColor: "white" | "secondary") => {
  return bgColor === "white" ? "bg-white" : "bg-secondary-100";
};

const FriendsGroupRow = ({
  friendsGroup,
  bgColor = "white",
  right = null,
}: FriendsGroupRowProps) => {
  return (
    <div
      className={
        "select-none flex flex-col p-[16px] border-b-[1px] border-gray-100 gap-[8px] " +
        backgroundColor(bgColor)
      }
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-[16px] font-semibold">{friendsGroup.name}</p>
        {right}
      </div>
      <p className="text-[14px] font-regular text-gray-900">
        {friendsGroup.description}
      </p>
    </div>
  );
};

export default FriendsGroupRow;
