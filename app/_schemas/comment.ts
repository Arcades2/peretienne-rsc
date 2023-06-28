import { z } from 'zod';

export const createCommentSchema = z.object({
  comment: z.string().min(1).max(1000),
  post: z.string(),
});
