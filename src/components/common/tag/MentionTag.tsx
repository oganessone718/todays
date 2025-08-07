import AtomicTag from "./_atomic/AtomicTag";

interface MentionTagProps {
  text: string;
  count: number;
}

const MentionTag = ({ text, count }: MentionTagProps) => {
  return (
    <AtomicTag
      color="secondary"
      iconType="mention"
      text={
        <p className="text-[12px]">
          <b>{text}</b> {count > 1 && ` 외 ${count - 1}명`}
        </p>
      }
    />
  );
};

export default MentionTag;
