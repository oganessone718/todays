import AtomicTag from "./_atomic/AtomicTag";

interface VisibilityTagProps {
  visibilityType: "some" | "none";
}
const colorRender = (visibilityType: "some" | "none") => {
  if (visibilityType === "some") {
    return "primary";
  } else {
    return "secondary";
  }
};

const textRender = (visibilityType: "some" | "none") => {
  if (visibilityType === "some") {
    return <p className="text-[12px] ml-[2px] font-semibold">일부 공개</p>;
  } else {
    return <p className="text-[12px] ml-[2px] font-semibold">비공개</p>;
  }
};

const VisibilityTag = ({ visibilityType }: VisibilityTagProps) => {
  return (
    <AtomicTag
      color={colorRender(visibilityType)}
      iconType={visibilityType}
      text={textRender(visibilityType)}
      isDeletable={false}
    />
  );
};

export default VisibilityTag;
