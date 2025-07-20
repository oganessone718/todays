"use client";

import IconButton from "@/components/common/Button/IconButton";
import { useRouter } from "next/navigation";

type IconType = "arrow" | "x";

const iconTypeToClassName = (iconType: IconType) => {
  switch (iconType) {
    case "arrow":
      return "arrow_left_alt";
    case "x":
      return "close";
    default:
      return "arrow_left_alt";
  }
};

const BackIconButton = ({ iconType = "arrow" }: { iconType?: IconType }) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const iconName = iconTypeToClassName(iconType);

  return <IconButton iconName={iconName} onClick={handleBack} />;
};

export default BackIconButton;
