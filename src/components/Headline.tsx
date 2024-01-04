import React, { ReactNode } from 'react';

export const Headline: React.FC<{
  size?: string;
  children: ReactNode;
}> = ({ size, children }) => {
  return <p className={`text-${size ?? '2xl'} font-bold`}>{children}</p>;
};
