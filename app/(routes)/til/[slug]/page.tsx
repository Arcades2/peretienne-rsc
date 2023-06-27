import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx';
import TagList from '@/app/_components/TagList';
import './github-theme.css';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPostBySlug(params.slug);

  return {
    title: meta.title,
    description: meta.subtitle,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();

  // Generate 10 latest posts
  return posts.slice(0, 10).map(({ slug }) => ({
    slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { content, meta } = await getPostBySlug(params.slug);

  return (
    <div className="prose md:prose-xl prose-invert">
      <h1>{meta.title}</h1>
      <h2>{meta.subtitle}</h2>
      {!!meta.tags?.length && <TagList tags={meta.tags} />}
      <div className="h-1 w-full bg-rose-300 my-8" />
      {content}
    </div>
  );
}
