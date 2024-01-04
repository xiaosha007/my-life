'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

const createMomentSchema = z.object({
  content: z.string().min(1, 'Missing content!'),
  title: z.string().min(1, 'Missing title!'),
});

export const createMoment = async (prevState: any, formData: FormData) => {
  const title = formData.get('title');
  const content = formData.get('content');

  try {
    const parsed = createMomentSchema.parse({
      content,
      title,
    });

    const res = await fetch(`${process.env.BASE_API ?? ''}/api/article`, {
      method: 'post',
      body: JSON.stringify(parsed),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.id) {
      // success handling
      redirect('/moment/create');
      return {
        id: data.id,
        statusCode: 200,
      };
    } else {
      // fail handling
      throw new Error(`Unexpected error!`);
    }
  } catch (err) {
    console.log(err);
    return { message: 'Failed to create!', statusCode: 500 };
  }
};
