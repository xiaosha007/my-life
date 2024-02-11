import { LinkButton } from '../../../components/LinkButton';
import { RestApi } from '../../../utils';

const getMoment = async (id: string) => {
  try {
    const res = await RestApi.GET({
      path: `/api/articles/${id}`,
    });
    return res.json().then((_res) => {
      return _res as { content: string; title: string; id: string }; // TODO: create a type that can be reused;
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default async function Moment({ params }: { params: { id: string } }) {
  const moment = await getMoment(params.id);
  return (
    <>
      {moment ? (
        <>
          <LinkButton className='m-5 px-6' href={`/moment`}>
            Back
          </LinkButton>
          <div className='flex flex-col items-center justify-center  bg-black-overlay p-10 leading-8'>
            <div className='mt-5'>
              <p className='text-center text-4xl'>{moment.title}</p>
            </div>
            <div
              className='text-over mt-10 w-full'
              dangerouslySetInnerHTML={{ __html: moment.content }}
            />
          </div>
          <div className='mt-5 px-20 pb-5'>
            <LinkButton className='w-full' href={`/moment/${params.id}/update`}>
              Edit
            </LinkButton>
          </div>
        </>
      ) : (
        <>Failed to get moments.</>
      )}
    </>
  );
}
