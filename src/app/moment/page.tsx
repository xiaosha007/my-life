import { LinkButton } from '../../components/LinkButton';
import { RestApi } from '../../utils';

const getMoments = async () => {
  const res = await RestApi.GET({
    path: '/api/articles/',
  });
  return res.json().then((_res) => {
    return _res as { content: string; title: string; id: string }[]; // TODO: create a type that can be reused;
  });
};

export default async function Moments() {
  // const articles: { content: string; title: string }[] = [];

  const articles = await getMoments();

  return (
    <>
      {/* <p className='text-3xl'> My Life Moment </p> */}
      {articles.length ? (
        <div className='px-32 py-10'>
          {articles.map(({ title, content, id }) => {
            return (
              <div
                key={id}
                className='mt-5 rounded border-black bg-black-overlay p-5'
              >
                <a href={`/moment/${id}`}>
                  <p className='text-2xl font-bold '>{title}</p>
                  <p className='text-sm text-[#d3d2d2]'>{content}</p>
                </a>
              </div>
            );
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
