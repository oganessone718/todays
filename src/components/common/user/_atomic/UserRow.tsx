import { UserWithoutPassword } from "@/types/users";
import React from "react";

interface UserRowProps {
  user: UserWithoutPassword;
  bgColor?: "white" | "secondary";
  right?: React.ReactNode;
}

const backgroundColor = (bgColor: "white" | "secondary") => {
  return bgColor === "white" ? "bg-white" : "bg-secondary-100";
};

const UserRow = ({ user, bgColor = "white", right = null }: UserRowProps) => {
  return (
    <div
      className={
        "select-none flex flex-row items-center p-[16px] border-b-[1px] border-gray-100 justify-between " +
        backgroundColor(bgColor)
      }
    >
      <div className="flex flex-row gap-[8px] items-center">
        <div className="bg-gray-500 text-gray-100 rounded-[50px] w-[32px] h-[32px] items-center justify-center flex">
          <span className="icons-default icons-filled text-[32px] font-black ">
            person
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold">{user.nickname}</p>
          <p className="text-[12px] font-regular text-gray-900">
            @{user.loginId}
          </p>
        </div>
      </div>
      {right}
    </div>
  );
};

export default UserRow;
