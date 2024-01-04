'use client';

import { Autoplay } from 'swiper/modules';
import { TechsData } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import _ from 'lodash';

export const TechSwiper = () => {
  // get max height to assign text in the correct position
  const maxHeight = _.maxBy(TechsData, (tech) => tech.height)?.height || 0;
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
        {TechsData.map((skill, index) => (
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
              <p className='mt-1 text-center text-sm'>{skill.name}</p>
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
        {TechsData.map((skill, index) => {
          const heightClass = `h-[${maxHeight + 10}px]`;
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
                <p className='mt-1 text-center text-sm'>{skill.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
