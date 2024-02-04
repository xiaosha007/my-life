'use server';

import { RedirectType, redirect } from 'next/navigation';
import { z } from 'zod';
import { RestApi } from '../../utils';

const createMomentSchema = z.object({
  content: z.string().min(1, 'Missing content!'),
  title: z.string().min(1, 'Missing title!'),
});

export const createMoment = async (prevState: any, formData: FormData) => {
  const title = formData.get('title');
  const content = formData.get('content');
  // at this moment NextJS is having bug with `redirect` and it cannot be used inside try...catch block
  // https://stackoverflow.com/questions/76191324/next-13-4-error-next-redirect-in-api-routes
  let failedToRedirect = false;

  try {
    const parsed = createMomentSchema.parse({
      content,
      title,
    });

    const res = await RestApi.POST({
      body: parsed,
      path: '/api/articles',
    });
    const data = await res.json();
    if (data.id) {
      // success handling
    } else {
      // fail handling
      throw new Error(`Unexpected error!`);
    }
  } catch (err) {
    console.log(err);
    failedToRedirect = true;
  }

  if (!failedToRedirect) {
    return redirect('/moment', RedirectType.push);
  }
  return { message: 'Failed to create!', statusCode: 500 };
};
