import { getAllPostsMeta } from '@/lib/mdx';
import type { PostMeta } from '@/lib/mdx';
import Link from 'next/link';
import dayjs from 'dayjs';
import TagList from './components/TagList';

export default async function TILPage() {
  const posts = await getAllPostsMeta();

  return (
    <ul className="divide-y-2">
      {posts.map((post) => {
        return <PostCard key={post.title} post={post} />;
      })}
    </ul>
  );
}

type PostCardProps = {
  post: PostMeta;
};

function PostCard({ post }: PostCardProps) {
  const { slug, title, subtitle, date, readingTime, tags } = post;

  return (
    <li className="py-8">
      <Link
        href={`/til/${slug}`}
        className="text-teal-400 hover:underline font-bold mb-8"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-xs mt-4">
        {dayjs(date).format('YYYY/MM/DD')} - ⏲️ {readingTime} min read
      </p>
      <p className="text-lg">{subtitle}</p>
      {!!tags?.length && <TagList tags={tags} />}
    </li>
  );
}
