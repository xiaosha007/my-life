import Image from 'next/image';
import Link from 'next/link';

export const CertificationCard = ({
  issuer,
  title,
  logoPath,
  href,
}: {
  issuer: string;
  title: string;
  logoPath: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='cursor-pointer border border-white px-5 py-3 hover:border-highlight hover:text-highlight'
    >
      <Image
        src={logoPath}
        width={50}
        height={50}
        alt='logo'
        className='mx-auto'
      />
      <div className='mt-2 text-center'>
        <p className='text-sm text-yellow-400'>{issuer}</p>
        <p className='text-base font-semibold'>{title}</p>
      </div>
    </Link>
  );
};
