'use client';

import { useState, useTransition } from 'react';
import { createComment } from '@/app/(actions)/createComment';
import Button from '@/app/_components/Button';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { createCommentSchema } from '@/app/_schemas';
import { ZodError } from 'zod';

type CreateCommentProps = {
  post: string;
};

export default function CreateComment({ post }: CreateCommentProps) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <div className="prose md:prose-xl prose-invert">
        <p>
          You must be logged in to comment.{' '}
          <Link href={`/signin?callbackUrl=${pathname}`}>
            Click here to sign in.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="prose md:prose-xl prose-invert">
      <textarea
        className="w-full h-32 text-black p-2 rounded-md"
        name="comment"
        value={comment}
        onChange={(e) => startTransition(() => setComment(e.target.value))}
      />
      <div className="flex justify-end">
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button
          onClick={() =>
            startTransition(async () => {
              try {
                createCommentSchema.parse({
                  post,
                  comment,
                });

                await createComment({
                  post,
                  comment,
                });

                setComment('');
                setError('');
                document.getElementById('comments')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });

                router.refresh();
              } catch (err) {
                console.log(err);
                if (err instanceof ZodError) {
                  setError(err.issues[0].message);
                }
              }
            })
          }
          disabled={isPending || comment.length === 0}
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
