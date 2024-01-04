'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypingText = ({
  texts,
  className,
}: {
  texts: (string | number)[];
  className?: string;
}) => {
  return (
    <TypeAnimation
      sequence={texts}
      wrapper='span'
      speed={50}
      repeat={Infinity}
      className={className}
    />
  );
};
