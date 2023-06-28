import prisma from '@/lib/prismaClient';
import CreateComment from '@/app/_components/CreateComment';
import dayjs from 'dayjs';

type CommentsProps = {
  post: string;
};

export default async function Comments({ post }: CommentsProps) {
  const comments = await prisma.comment.findMany({
    where: {
      enabled: true,
      post,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div id="comments" className="prose md:prose-xl prose-invert">
      <div className="divide-y divide-rose-100">
        {comments.length === 0 && <p>No comments yet.</p>}
        {comments.map((comment) => (
          <div key={comment.id} className="py-10">
            <div>
              <span className="text-teal-400">{comment.author.name}</span> -{' '}
              <span className="text-gray-500 text-sm">
                {dayjs(comment.createdAt).format('YYYY/MM/DD').toString()}
              </span>
            </div>
            <div className="pl-2">{comment.message}</div>
          </div>
        ))}
      </div>
      <div className="h-1 w-full bg-rose-300 my-8" />
      <h2>Add a comment</h2>
      <CreateComment post={post} />
    </div>
  );
}
