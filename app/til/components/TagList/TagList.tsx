type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className="text-rose-300 text-sm mr-2">
          #{tag}
        </span>
      ))}
    </>
  );
}
