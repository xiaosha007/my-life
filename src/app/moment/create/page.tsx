'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { createMoment } from '../../../actions/moment';
import { LinkButton } from '../../../components/LinkButton';
import { SubmitButton } from '../../../components/SubmitButton';
import { Tiptap } from '../../../components/tiptap/Tiptap';

const initialState = {
  message: '',
  statusCode: 200,
};

export default function CreateMoment() {
  console.log(`create page Rendering...`);

  const [state, formAction] = useFormState(createMoment, initialState);
  const [content, setContent] = useState<string>('');

  return (
    <form action={formAction} className='px-5 py-5 text-black md:px-0'>
      <LinkButton href='/moment' className='px-6'>
        Back
      </LinkButton>
      <p className='mt-5 text-4xl font-extrabold leading-tight text-white'>
        Create <span className='text-yellow-400'>your</span> unforgettable
        moment
      </p>
      <section className='mt-5'>
        <label>
          <input
            className='mb-5 w-full rounded p-2'
            placeholder='Title'
            type='text'
            name='title'
          />
        </label>
        <input hidden name='content' value={content} readOnly />
        <Tiptap setContent={setContent} content={content} />
        {/* <label>
          <textarea
            className='mt-5 w-full rounded p-2'
            placeholder='Write something interesting here...'
            name='content'
            rows={15}
          />
        </label> */}
      </section>

      <SubmitButton>Submit</SubmitButton>

      {state.statusCode === 500 && (
        <div className='mt-10 rounded bg-yellow-200 p-2'>
          <p className='text-2xl text-red-500'>{state.message}</p>
        </div>
      )}
    </form>
  );
}
