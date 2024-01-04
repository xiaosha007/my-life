import React from 'react';
import { IconType } from 'react-icons';

export const ContactItem = ({
  description,
  icon,
  title,
}: {
  title: string;
  description: string;
  icon: IconType;
}) => {
  return (
    <div className='flex w-fit items-center justify-center'>
      {/* circle box */}
      <div className='rounded-full bg-yellow-400'>
        {React.createElement(icon, { className: 'mx-auto h-16 w-16 p-3' })}
      </div>
      <div className='ml-3'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-sm text-[#d3d2d2]'>{description}</p>
      </div>
    </div>
  );
};
