import Link from 'next/link';
import React, { ReactNode } from 'react';

export const LinkButton: React.FC<{
  children: ReactNode;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}> = ({ children, className, href, target }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`rounded-lg bg-[#55e6a5] p-2 text-black hover:bg-yellow-400 ${className} block w-fit text-center`}
    >
      {children}
    </Link>
  );
};
