import Header from "@/components/common/Header";
import BackButton from "@/components/common/Button/BackButton";

const Create = () => {
  return (
    <div className="flex flex-col">
      <Header
        left={<BackButton iconType="x" />}
        center={<span className="text-lg font-medium">To.Day 작성</span>}
      />
    </div>
  );
};

export default Create;
