import Client from './instance';

export async function getRequest(params: object, URL: string) {
  const response = await Client.get(URL, params);
  return response;
}
