export namespace RestApi {
  const baseUrl = process.env.BASE_API ?? '';

  export const POST = async ({ body, path }: { body: any; path: string }) => {
    const res = await fetch(`${baseUrl}${path}`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  };

  export const PATCH = async ({ body, path }: { body: any; path: string }) => {
    const res = await fetch(`${baseUrl}${path}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  };

  export const DELETE = async ({
    body,
    path,
  }: {
    body?: any;
    path: string;
  }) => {
    const res = await fetch(`${baseUrl}${path}`, {
      method: 'delete',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  };

  export const GET = async ({
    params, // TODO: pass into path
    path,
  }: {
    params?: any;
    path: string;
  }) => {
    const res = await fetch(`${baseUrl}${path}`);
    return res;
  };
}
