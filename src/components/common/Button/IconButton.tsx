interface IconButtonProps {
  iconName: string;
  size?: number;
  filled?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  size = 24,
  filled = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-[${size}px] w-[${size}px] flex items-center justify-center icons-default ${
        filled ? "icons-filled" : ""
      }`}
    >
      {iconName}
    </button>
  );
};

export default IconButton;
