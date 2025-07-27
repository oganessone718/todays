"use client";

interface IconButtonProps {
  type?: "button" | "submit" | "reset";
  iconName: string;
  small?: boolean;
  filled?: boolean;
  onClick?: () => void;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  type = "button",
  iconName,
  small = false,
  filled = false,
  onClick = () => {},
  color = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center icons-default cursor-pointer ${
        filled ? "icons-filled" : ""
      } ${small ? "icons-small" : ""} ${color ? "text-${color}" : ""}`}
    >
      {iconName}
    </button>
  );
};

export default IconButton;
