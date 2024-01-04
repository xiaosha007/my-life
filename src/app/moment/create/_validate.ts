import { z } from 'zod';

export const schema = z.object({
  content: z.string().min(1, 'Missing content!'),
  title: z.string().min(1, 'Missing title!'),
});
