import React, { ReactNode } from 'react';

export const Button: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <button
      className={`rounded-lg bg-[#55e6a5] p-2 text-black  hover:bg-yellow-400  ${className}`}
    >
      {children}
    </button>
  );
};
