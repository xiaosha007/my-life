import Image from 'next/image';
import { CertificationCard } from '../components/CertificationCard';
import { ExperienceItem } from '../components/ExperienceItem';
import { GradientText } from '../components/GradientText';
import { LinkButton } from '../components/LinkButton';
import { Particle } from '../components/Particle';
import { ServiceCard } from '../components/ServiceCard';
import { TechSwiper } from '../components/TechsSwiper';
import { TypingText } from '../components/TypingText';
import { CertData, ExperienceData, ServiceData } from '../constants';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <div className='grid grid-cols-1 items-center  gap-5 px-10 pt-24 lg:grid-cols-2'>
        {/* Self introduction */}
        <div className='flex flex-[0.75] flex-col'>
          <Particle />

          <div className=' text-5xl font-extrabold'>
            HI, I'M{' '}
            <GradientText props={{ className: 'inline' }}>
              Wei Xiang!
            </GradientText>
          </div>
          <div className='mt-3 text-5xl font-extrabold text-highlight'>
            <TypingText
              texts={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Programmer',
                1000,
                'Engineer',
                1000,
              ]}
              className='text-5xl'
            />
          </div>
          <p className='mt-10'>
            A programmer that loves to build things from scratch and passionate
            in solving issues that are interesting and challenging.
          </p>
          <LinkButton
            href='/resume.pdf'
            className='mt-10 p-5 text-xl font-bold uppercase'
            target='_blank'
          >
            Download CV
          </LinkButton>
        </div>
        {/* Avatar */}
        <div className='mx-auto '>
          <Image
            src='/me.png'
            alt='logo'
            width={400}
            height={400}
            className='rounded-full  object-cover'
          />
        </div>
      </div>
      <div className='mt-20 bg-[#121121] px-5 py-10'>
        {/* Services */}
        <section>
          <p className='text-center text-3xl font-bold uppercase'>
            My <span className='text-yellow-400'>Services</span> &{' '}
            <span className='text-red-400'>Technologies</span>
          </p>
          <div className='my-10'>
            <TechSwiper />
          </div>
          <div className='mx-auto mt-5 grid grid-cols-3 items-center gap-10'>
            {ServiceData.map((service) => {
              return (
                <div key={service.title}>
                  <ServiceCard
                    description={service.description}
                    icon={service.icon}
                    title={service.title}
                    backgroundColor={service.bgColor}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* Experiences */}
        <section className='mt-20'>
          <p className='text-center text-3xl font-bold uppercase'>
            My <span className='text-yellow-400'>Experiences</span>
          </p>
          <div className='mx-atuo grid grid-cols-1 gap-10 p-10 md:grid-cols-2 '>
            {ExperienceData.map((data, index) => {
              return (
                <ExperienceItem
                  key={index}
                  description={data.description}
                  title={data.title}
                  years={data.years}
                />
              );
            })}
          </div>
        </section>
        {/* Certifications */}
        <section className='mt-20'>
          <p className='text-center text-3xl font-bold uppercase'>
            My <span className='text-yellow-400'>Certifications</span>
            {' & '}
            <span className='text-blue-400'>Awards</span>
          </p>
          <div className='grid grid-cols-3 gap-5 py-10 lg:px-[10rem]'>
            {CertData.map((data, index) => {
              return (
                <CertificationCard
                  key={index}
                  issuer={data.issuer}
                  logoPath={data.logoPath}
                  title={data.title}
                  href={data.href}
                />
              );
            })}
          </div>
        </section>
      </div>

      {/* <div className='mt-20 bg-[#121121] px-5 py-10'></div> */}
    </main>
  );
}
