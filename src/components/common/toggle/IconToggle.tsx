interface IconToggleProps {
  selected: string;
  options: string[];
  onSelect?: (option: string) => void;
}

const IconToggle = ({
  selected,
  options,
  onSelect = (_: string) => {},
}: IconToggleProps) => {
  const classNameBySelect = (option: string) => {
    if (selected === option) {
      return " icons-filled text-secondary-900 bg-secondary-300";
    } else {
      return " text-gray-700";
    }
  };
  return (
    <div className="bg-gray-50 rounded-[50px] gap-[4px] px-[8px] py-[4px] flex flex-row items-center select-none">
      {options.map((option) => (
        <div
          key={option}
          className={
            "icons-default rounded-[50px] px-[8px] cursor-pointer" +
            classNameBySelect(option)
          }
          onClick={() => {
            onSelect(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default IconToggle;
