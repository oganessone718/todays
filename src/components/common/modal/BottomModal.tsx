interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const BottomModal = ({
  isOpen,
  onClose,
  children = <div></div>,
}: BottomModalProps) => {
  return (
    isOpen && (
      <div
        onClick={onClose}
        className="fixed bottom-0 left-0 w-[100%] h-[100%] bg-black/40 z-100 flex justify-center items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-0 w-[100%] bg-white flex flex-col items-center border-gray-500 border-t-[2px] rounded-t-[16px]"
        >
          <div
            className="w-[100%] flex justify-end text-gray-900 px-[16px] py-[16px] cursor-pointer border-b-[1px] border-gray-100"
            onClick={onClose}
          >
            <span className="icons-default">close</span>
          </div>
          {children}
          <div className="w-[100%] h-[54px]" />
        </div>
      </div>
    )
  );
};

export default BottomModal;
