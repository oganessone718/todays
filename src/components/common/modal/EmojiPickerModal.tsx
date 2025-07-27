import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmojiSelect?: (emojiData: EmojiClickData) => void;
}

const EmojiPickerModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onEmojiSelect = (emojiData: EmojiClickData) => {},
}) => {
  return (
    isOpen && (
      <div
        onClick={() => onClose()}
        className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/40 z-100 flex justify-center items-center"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onEmojiSelect(emojiData);
              onClose();
            }}
            width={320}
          />
        </div>
      </div>
    )
  );
};

export default EmojiPickerModal;
