'use client';

import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BackendTechData, FrontendTechData } from '../constants';

export const TechSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%] '
      >
        {FrontendTechData.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className='mx-1'>
              <div className='h-[90px]'>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className='mx-auto'
                />
              </div>
              <p className='mt-1 overflow-x-hidden text-center text-sm'>
                {skill.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className='mt-5 max-w-[80%]'
      >
        {BackendTechData.map((skill, index) => {
          return (
            <SwiperSlide key={index} className='relative mb-8'>
              <div className='mx-1'>
                <div className='h-[90px]'>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    className='mx-auto'
                  />
                </div>
                <p className='mt-1 overflow-x-hidden text-center text-sm'>
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
