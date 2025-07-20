interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  left = null,
  center = null,
  right = null,
}) => {
  return (
    <div>
      <div className="fixed w-full top-0 z-50 flex justify-between items-center h-[56px] px-[32px] py-[16px] border-b-[1px] border-b-gray-300 bg-white gap-[12px]">
        <div className="flex flex-1 gap-[12px] items-center">
          {left}
          {center}
        </div>
        <div className="flex">{right}</div>
      </div>
      {/* spacer */}
      <div className="h-[56px]"></div>
    </div>
  );
};

export default Header;
