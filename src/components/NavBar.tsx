import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  // TODO: afterwards can make this a prop
  const navItems = [
    {
      label: 'Moment',
      href: '/moment',
    },
  ];
  return (
    <nav className='relative z-10 flex w-full justify-between bg-[#141c27] px-10 py-5 font-nunito-sans'>
      {/* brand section */}
      <section>
        <Link className='flex items-center justify-center font-bold' href='/'>
          <Image src='/logo.png' alt='logo' width={30} height={15} />
          <p className='ml-2 text-xl'>My Life</p>
        </Link>
      </section>
      {/* other pages section */}
      <section className='flex'>
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            className='after-origin-center relative ml-5 w-fit cursor-pointer text-[17px] font-semibold text-white after:absolute after:block after:h-[3px] after:w-full  after:scale-x-0 after:bg-yellow-400  after:transition  after:duration-100 after:content-[""] after:hover:scale-x-100 md:block'
            href={navItem.href}
          >
            {navItem.label}
          </Link>
        ))}
      </section>
    </nav>
  );
};
