import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from '@/utils/readingTime';
import rehypeHighlight from 'rehype-highlight';

const rootDirectory = path.join(process.cwd(), 'posts');

export type PostFrontMatter = {
  title: string;
  subtitle?: string;
  date: string;
  tags?: string[];
};

export type PostMeta = PostFrontMatter & {
  slug: string;
  readingTime: number;
};

export type Post = ReturnType<typeof getPostBySlug>;

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX<PostFrontMatter>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
      readingTime: readingTime(fileContent),
    },
    content,
  };
};

export const getAllPostsMeta = async (search?: string) => {
  const files = fs.readdirSync(rootDirectory);

  const postsMeta = (
    await Promise.all(
      files.map(async (file) => {
        const { meta } = await getPostBySlug(file);
        return meta;
      }),
    )
  ).filter((post) => {
    if (!search) return true;
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.subtitle?.toLowerCase().includes(search.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return postsMeta.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
