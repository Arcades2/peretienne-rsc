type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-rose-300 text-sm">
          #{tag}
        </span>
      ))}
    </div>
  );
}
