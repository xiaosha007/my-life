'use client';

import { Button } from '@/components/Button';
import { LinkButton } from '@/components/LinkButton';
import { createMoment } from '../actions';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  statusCode: 200,
};

export default function CreateMoment() {
  const [state, formAction] = useFormState(createMoment, initialState);

  return (
    <form action={formAction} className='px-20 py-5 text-black'>
      <LinkButton href='/moment' className='px-6'>
        Back
      </LinkButton>
      <p className='mt-5 text-3xl text-white'>
        Create <strong className='text-yellow-200'>YOUR</strong> moment
      </p>
      <section className='mt-5'>
        <label>
          <input
            className='w-full rounded p-2'
            placeholder='Title'
            type='text'
            name='title'
          />
        </label>
        <label>
          <textarea
            className='mt-5 w-full rounded p-2'
            placeholder='Write something interesting here...'
            name='content'
            rows={15}
          />
        </label>
      </section>
      <div className='flex justify-center'>
        <Button className=' mt-5 w-1/2'>Submit</Button>
      </div>

      {state.statusCode === 500 && (
        <div className='mt-10 bg-yellow-200 p-2'>
          <p className='text-2xl text-red-500'>{state.message}</p>
        </div>
      )}
    </form>
  );
}
