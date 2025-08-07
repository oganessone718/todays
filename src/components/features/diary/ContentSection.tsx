const ContentSection = ({ content }: { content: string }) => {
  return (
    <div className="p-[16px] border-b-[1px] border-gray-100">
      <p className="text-[16px] font-regular text-gray-900">{content}</p>
    </div>
  );
};

export default ContentSection;
