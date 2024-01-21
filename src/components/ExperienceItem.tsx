export const ExperienceItem = ({
  description,
  title,
  years,
  organization,
}: {
  years: string;
  title: string;
  description: string;
  organization?: { name: string };
}) => {
  return (
    <div>
      <div className='w-[15rem] border-2 border-yellow-400 px-6 py-2 font-bold text-yellow-400'>
        <p className='text-center'>{years}</p>
      </div>
      <p className='mt-5 w-fit text-2xl font-bold uppercase text-white'>
        {title}
      </p>
      {organization && (
        <div className='text-lg font-semibold text-highlight'>
          <p>{organization.name}</p>
        </div>
      )}
      <p className='mt-1 text-sm text-[#d3d2d2] md:w-3/4'>{description}</p>
    </div>
  );
};
