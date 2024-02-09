import { RestApi } from '../../../../../utils';

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  console.log(`Entering...`);
  const res = await (
    await RestApi.GET({ path: `/api/articles/${params.id}` })
  ).json();
  return Response.json({ res });
};
