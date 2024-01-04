import type { Metadata } from 'next';
import { Inter, Nunito_Sans } from 'next/font/google';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'My Life',
  description: 'My life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${nunitoSans.className}  bg-black  bg-main bg-cover bg-fixed bg-center`}
      >
        {/* <video autoPlay muted loop className='fixed right-0 bottom-0 min-w-full min-h-full object-cover'>
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
        <NavBar />
        <section className=''>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
