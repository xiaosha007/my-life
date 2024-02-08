'use client';
import { MdDelete } from 'react-icons/md';
import { deleteMoment } from '../../actions/moment';
import { moment } from '../../type/moment';

export const MomentPost: React.FC<{
  moment: moment;
  key?: string;
}> = ({ moment: { content, id, title }, key }) => {
  return (
    <div
      key={key || id}
      className='mt-5 rounded border-black bg-black-overlay p-5'
    >
      <div className='flex justify-between'>
        <a href={`/moment/${id}`} className='w-[90%]'>
          <p className=' text-lg font-bold md:text-2xl'>{title}</p>
        </a>
        <div
          className='h-fit cursor-pointer rounded-full border border-highlight bg-transparent p-1 text-highlight hover:bg-red-500'
          onClick={async () => {
            await deleteMoment({ momentId: id });
          }}
        >
          <MdDelete />
        </div>
      </div>
      <a href={`/moment/${id}`}>
        <p className=' line-clamp-3 w-full overflow-hidden  text-ellipsis text-sm text-[#d4b5b5]'>
          {content}
        </p>
      </a>
    </div>
  );
};
