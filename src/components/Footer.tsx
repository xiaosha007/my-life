import { ContactData } from '../constants';
import { ContactItem } from './ContactItem';

export const Footer = () => {
  return (
    <div className='border-t-[0.5px] border-gray-400 bg-[#02050a] px-10 py-5 md:border-none'>
      {/* contact me */}
      <div>
        <p className='text-center text-3xl font-bold uppercase'>
          Contact <span className='text-yellow-400'> me</span>
        </p>
        <div className='grid-cols-1gap-3 mx-auto mt-5 grid w-[90%] sm:grid-cols-3 md:w-3/4'>
          {ContactData.map((data, index) => {
            return (
              <div key={index} className='mt-3 sm:mt-0'>
                <ContactItem
                  description={data.description}
                  icon={data.icon}
                  title={data.title}
                  link={data.link}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-5 grid grid-cols-1 justify-between border-t-2 border-gray-400 pt-5 text-xs opacity-70 md:grid-cols-2 md:text-base'>
        <p className=''>My Life 2023 | All Rights Reserved</p>
        <p className='text-left md:text-end'>Created by Wei Xiang</p>
      </div>
    </div>
  );
};
