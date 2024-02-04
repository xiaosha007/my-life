import React, { ReactNode } from 'react';

export const Button: React.FC<{
  children: ReactNode;
  className?: string;
  ariaDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, className, ariaDisabled, type }) => {
  return (
    <button
      className={`rounded-lg bg-[#55e6a5] p-2 text-black  hover:bg-yellow-400  ${className}`}
      aria-disabled={ariaDisabled}
      type={type}
    >
      {children}
    </button>
  );
};
