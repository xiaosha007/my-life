import { LinkButton } from '../../components/LinkButton';

export default function Moment() {
  const articles: { content: string; title: string }[] = [];

  return (
    <>
      {/* <p className='text-3xl'> My Life Moment </p> */}
      {articles.length ? (
        <div>
          {articles.map((article, index) => {
            return <div key={index}></div>;
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
