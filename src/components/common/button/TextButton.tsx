interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  activated?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text = "",
  activated = true,
  onClick = () => {},
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-[12px] py-[8px] flex items-center justify-center gap-[2px] font-medium text-[18px] 
        ${activated ? "text-primary-500" : "text-gray-500 "}
        ${activated ? "cursor-pointer" : "cursor-not-allowed"}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
