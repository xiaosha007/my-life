'use server';

import { revalidatePath } from 'next/cache';
import { RedirectType, redirect } from 'next/navigation';
import { z } from 'zod';
import { RestApi } from '../utils';

const createMomentSchema = z.object({
  content: z
    .string()
    .min(1, 'Missing content!')
    .min(50, "You are writting something meaningful, please don't be lazy."),
  title: z.string().min(1, 'Missing title!'),
  createdBy: z.string().min(1, 'Missing author!'),
});

const updateMomentSchema = createMomentSchema.extend({
  momentId: z.string().min(1, 'Required'),
});

const deleteMomentSchema = z.object({
  id: z.string().min(1),
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
      createdBy: 'xiaosha007',
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
    revalidatePath('/moment');
    return redirect('/moment', RedirectType.push);
  }
  return { message: 'Failed to create!', statusCode: 500 };
};

export const deleteMoment = async ({ momentId }: { momentId: string }) => {
  // const momentId = formData.get('momentId');

  try {
    const parsed = deleteMomentSchema.parse({
      id: momentId,
    });

    const res = await RestApi.DELETE({
      path: `/api/articles/${parsed.id}`,
    });
    if (res.status === 200) {
    } else throw new Error(`Unexpected error!`);
  } catch (err) {
    console.log(err);
    return { message: 'Failed to delete!', statusCode: 500 };
  } finally {
    revalidatePath('/moment');
  }
};

export const updateMoment = async (prevState: any, formData: FormData) => {
  const title = formData.get('title');
  const content = formData.get('content');
  const momentId = formData.get('momentId');
  // at this moment NextJS is having bug with `redirect` and it cannot be used inside try...catch block
  // https://stackoverflow.com/questions/76191324/next-13-4-error-next-redirect-in-api-routes
  let failedToRedirect = false;

  try {
    const parsed = updateMomentSchema.parse({
      content,
      title,
      createdBy: 'xiaosha007',
      momentId,
    });

    const res = await RestApi.PATCH({
      body: parsed,
      path: `/api/articles/${parsed.momentId}`,
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
    revalidatePath(`/moment/${momentId}`);
    return redirect('/moment', RedirectType.push);
  }
  return { message: 'Failed to create!', statusCode: 500 };
};
