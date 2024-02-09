import React, { ReactNode } from 'react';

export const Headline: React.FC<{
  size?: string;
  children: ReactNode;
}> = ({ size, children }) => {
  const textSize = `text-${size ?? '2xl'}`;
  return <p className={`${textSize} font-bold`}>{children}</p>;
};
