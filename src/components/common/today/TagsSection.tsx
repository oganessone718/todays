import MentionTag from "@/components/common/tag/MentionTag";
import Tag from "@/components/common/tag/Tag";
import { Tag as TagType, User } from "@prisma/client";

const TagsSection = ({
  mentions,
  tags,
}: {
  mentions: User[] | null;
  tags: TagType[] | null;
}) => {
  return (
    <div className="p-[16px] flex flex-row gap-[4px]">
      {mentions && mentions.length > 0 && (
        <MentionTag text={mentions[0].nickname} count={mentions.length} />
      )}
      {tags && tags.length > 0 && (
        <Tag text={tags[0].name} count={tags.length} />
      )}
    </div>
  );
};

export default TagsSection;
