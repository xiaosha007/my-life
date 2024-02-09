import React from 'react';

export default function MomentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='overflow-x-hidden sm:px-[10%] md:px-[15%] lg:px-[20%]'>
      {children}
    </section>
  );
}
