import { getAllPostsMeta } from '@/lib/mdx';
import type { PostMeta } from '@/lib/mdx';
import Link from 'next/link';
import dayjs from 'dayjs';
import TagList from '@/app/_components/TagList';
import SearchInput from '@/app/_components/SearchInput';

type TILPageProps = {
  searchParams: {
    q?: string;
  };
};

export const metadata = {
  title: 'Today I Learned',
  description: 'A collection of things I learned.',
};

export default async function TILPage({ searchParams }: TILPageProps) {
  const posts = await getAllPostsMeta(searchParams.q);

  return (
    <div className="flex flex-col items-center">
      <SearchInput />
      <ul className="divide-y-2">
        {posts.map((post) => {
          return <PostCard key={post.title} post={post} />;
        })}
      </ul>
    </div>
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
