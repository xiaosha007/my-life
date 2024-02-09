'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { updateMoment } from '../../../../actions/moment';
import { LinkButton } from '../../../../components/LinkButton';
import { SubmitButton } from '../../../../components/SubmitButton';
import { Tiptap } from '../../../../components/tiptap/Tiptap';

const initialState = {
  message: '',
  statusCode: 200,
};

export default function UpdateMoment({ params }: { params: { id: string } }) {
  console.log(`update page Rendering...`);
  const [state, formAction] = useFormState(updateMoment, initialState);
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    fetch(`/api/v1/moment/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        const { title: _title, content: _content } = data.res;
        setTitle(_title), setContent(_content);
      });
  }, [params.id]);

  return (
    <form action={formAction} className='px-5 py-5 text-black md:px-0'>
      <LinkButton href={`/moment/${params.id}`} className='px-6'>
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
            defaultValue={title}
          />
        </label>
        <input hidden name='content' value={content} readOnly />
        <input hidden name='momentId' defaultValue={params.id} />
        {/*  wait content to load then only render the editor with default content value */}
        {content && <Tiptap setContent={setContent} content={content} />}
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
