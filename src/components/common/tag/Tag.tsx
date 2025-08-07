import AtomicTag from "./_atomic/AtomicTag";

interface TagProps {
  text: string;
  count: number;
}

const Tag = ({ text, count }: TagProps) => {
  return (
    <AtomicTag
      color="primary"
      iconType="tag"
      text={
        <p className="text-[12px]">
          <b>{text}</b>
          {count > 1 && ` 외 ${count - 1}개`}
        </p>
      }
    />
  );
};

export default Tag;
