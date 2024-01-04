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
        <div className='mx-auto mt-5 grid w-[90%] grid-cols-2 gap-3 sm:grid-cols-3 md:w-3/4'>
          {ContactData.map((data, index) => {
            return (
              <ContactItem
                key={index}
                description={data.description}
                icon={data.icon}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
      <div className='mt-5 flex justify-between border-t-2 border-gray-400 pt-5 opacity-70'>
        <p className=''>My Life 2023 | All Rights Reserved</p>
        <p>Created by Wei Xiang</p>
      </div>
    </div>
  );
};
