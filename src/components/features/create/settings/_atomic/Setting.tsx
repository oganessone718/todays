import IconButton from "@/components/common/button/IconButton";

interface SettingProps {
  icon: string;
  text: string;
  description?: string;
  onClick: () => void;
}

const Setting = ({ icon, text, description = "", onClick }: SettingProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row p-[16px] gap-[8px] border-b-[1px] border-gray-100 bg-white text-gray-900 items-center cursor-pointer"
    >
      <IconButton iconName={icon} small={true} />
      <p className="font-regular text-base flex-1">{text}</p>
      <p className="font-regular text-base">{description}</p>
      <IconButton iconName="arrow_forward_ios" small={true} />
    </div>
  );
};

export default Setting;
