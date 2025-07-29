interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  filled?: boolean;
  activated?: boolean;
  rounded?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text = "",
  filled = true,
  activated = true,
  rounded = false,
  onClick = () => {},
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-[12px] py-[8px] flex items-center justify-center gap-[2px] font-semibold text-[12px]
        ${
          filled
            ? activated
              ? "bg-primary-500 text-primary-900"
              : "bg-gray-300 text-white"
            : activated
            ? "border-[1px] border-primary-500 text-primary-500"
            : "border-[1px] border-gray-300 text-gray-300"
        } 
        ${activated ? "cursor-pointer" : "cursor-not-allowed"}
        ${rounded ? "rounded-[50px]" : "rounded-[8px]"} 
       `}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
