const ContentSection = ({ content }: { content: string }) => {
  return (
    <div className="p-[16px]">
      <p className="text-[16px] font-regular text-gray-900">{content}</p>
    </div>
  );
};

export default ContentSection;
