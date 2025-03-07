import { parseCookies } from 'nookies';

export const useGetToken = () => {
  const token = parseCookies();

  if (!token) return null;

  return token;
};
