'use server';

import { getServerSession } from 'next-auth/next';
import authOptions from '@/nextauth/authOptions';
import prisma from '@/lib/prismaClient';
import invariant from 'tiny-invariant';
import { ZodError } from 'zod';
import { createCommentSchema } from '@/app/_schemas';

export async function createComment({
  comment,
  post,
}: {
  comment: string;
  post: string;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) throw new Error('Not authenticated');

  invariant(session.user.email, 'User email is required');

  try {
    createCommentSchema.parse({ comment, post });
  } catch (err) {
    if (err instanceof ZodError) {
      throw new Error(err.issues[0].message);
    }
  }

  const result = await prisma.comment.create({
    data: {
      message: comment,
      post,
      author: {
        connect: {
          email: session.user.email,
        },
      },
    },
    include: {
      author: true,
    },
  });

  return result;
}
