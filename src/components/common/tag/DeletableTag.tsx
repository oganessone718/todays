import AtomicTag from "./_atomic/AtomicTag";

interface DeletableTagProps {
  text: string;
  onDelete: () => void;
}

const DeletableTag = ({ text, onDelete }: DeletableTagProps) => {
  return (
    <AtomicTag
      color="primary"
      iconType="tag"
      text={<p className="text-[14px] font-semibold">{text}</p>}
      isDeletable={true}
      onDelete={onDelete}
    />
  );
};

export default DeletableTag;
