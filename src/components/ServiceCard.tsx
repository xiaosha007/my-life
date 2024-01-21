import React from 'react';
import { IconType } from 'react-icons';

export const ServiceCard = ({
  title,
  description,
  icon,
  backgroundColor,
}: {
  title: string;
  description: string;
  icon: IconType;
  backgroundColor?: string;
}) => {
  // TODO: add text length limit
  const bgColor = backgroundColor || 'bg-red-700';
  return (
    <div
      className={`${bgColor} h-full transform px-5 py-10 text-center font-semibold uppercase transition-all duration-300 hover:-rotate-6 hover:scale-110`}
    >
      {React.createElement(icon, { className: 'mx-auto h-24 w-24' })}
      <p className='my-2 text-xl'>{title}</p>
      <p className=' text-xs text-[#d3d2d2] md:text-sm'>{description}</p>
    </div>
  );
};
