'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './Button';

export const SubmitButton: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <div className='flex justify-center'>
      <Button className=' mt-5 w-1/2' ariaDisabled={pending} type='submit'>
        {children}
      </Button>
    </div>
  );
};
