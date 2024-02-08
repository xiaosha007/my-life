import { Headline } from '../../../components/Headline';
import { RestApi } from '../../../utils';

const getMoment = async (id: string) => {
  const res = await RestApi.GET({
    path: `/api/articles/${id}`,
  });
  return res.json().then((_res) => {
    return _res as { content: string; title: string; id: string }; // TODO: create a type that can be reused;
  });
};

export default async function Moment({ params }: { params: { id: string } }) {
  const moment = await getMoment(params.id);
  return (
    <div className='flex flex-col items-center justify-center p-10'>
      <Headline>{moment.title}</Headline>
      <div className='mt-10 md:px-32'>{moment.content}</div>
    </div>
  );
}
