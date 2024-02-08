import { LinkButton } from '../../components/LinkButton';
import { MomentPost } from '../../components/moment/MomentPost';
import { moment } from '../../type/moment';
import { RestApi } from '../../utils';

const getMoments = async () => {
  const res = await RestApi.GET({
    path: '/api/articles/',
  });
  return res.json().then((_res) => {
    return _res as moment[]; // TODO: create a type that can be reused;
  });
};

export default async function Moments() {
  const articles = await getMoments();

  return (
    <>
      {/* <p className='text-3xl'> My Life Moment </p> */}
      {articles.length ? (
        <div className=' flex flex-col px-10 py-10 md:px-32'>
          <div className='self-end text-end font-bold'>
            <LinkButton href={'/moment/create'}>Create your moment</LinkButton>
          </div>
          {articles.map((moment) => {
            return <MomentPost moment={moment} key={moment.id} />;
          })}
        </div>
      ) : (
        <div className='mb-20 mt-10 flex flex-col items-center'>
          <p>No moment found</p>
          <LinkButton href='/moment/create' className='mt-10'>
            Click here to create one
          </LinkButton>
        </div>
      )}
    </>
  );
}
