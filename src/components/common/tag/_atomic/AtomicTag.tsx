import React from "react";

interface AtomicTagProps {
  color: "primary" | "secondary";
  iconType: "mention" | "tag" | "some" | "none";
  text: React.ReactNode;
  isDeletable?: boolean;
  onDelete?: () => void;
}

const getIconName = (iconType: string) => {
  switch (iconType) {
    case "mention":
      return "group";
    case "tag":
      return "grid_3x3";
    case "some":
      return "kid_star";
    case "none":
      return "lock";
  }
};

const AtomicTag = ({
  color,
  iconType,
  text,
  isDeletable = false,
  onDelete = () => {},
}: AtomicTagProps) => {
  return (
    <div
      className={`flex w-fit items-center py-[8px] px-[12px] text-${color}-900 bg-${color}-300 rounded-[50px] gap-[2px] select-none`}
    >
      <span className={"icons-default icons-filled icons-small font-black"}>
        {getIconName(iconType)}
      </span>
      {text}
      {isDeletable && (
        <span
          className={"icons-default icons-filled icons-small cursor-pointer"}
          onClick={onDelete}
        >
          close
        </span>
      )}
    </div>
  );
};

export default AtomicTag;
