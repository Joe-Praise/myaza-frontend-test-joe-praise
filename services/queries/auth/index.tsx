import {
  errorToast,
  //   handleErrors,
  //   saveLocalStorage,
  //   saveSessionStorage,
  successToast,
} from '../../helpers';
import { setCookie } from 'nookies';
import queryKey from './keys';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { routes } from '@/navigation';
// import axios from 'axios';

type Request = {
  url: string;
  body?: { email: string; password: string };
  auth?: boolean;
};

const useLogin = (options = {}) => {
  const router = useRouter();

  function handleLogin() {
    successToast('Sign in successful');
    console.log('Redirecting to', routes.dashboard.entry.path);
    router.push(routes.dashboard.entry.path);
    window.location.href = routes.dashboard.entry.path;
  }

  const { mutate, isPending, data, isSuccess } = useMutation({
    mutationFn: async (args: Request) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (args.body?.email) {
        setCookie(null, 'email', args.body.email, {
          maxAge: 7 * 24 * 60 * 60,
          path: '/',
          secure: process.env.N === 'production',
          sameSite: 'strict',
        });
      }

      return { succeeded: true };
    },
    mutationKey: [queryKey.login],
    ...options,
    onSuccess: (response: any) => {
      console.log('Response:', response);
      setTimeout(() => {
        router.push(routes.dashboard.entry.path);
        window.location.href = routes.dashboard.entry.path;
      }, 100);
    },
    onError: (err: unknown) => {
      console.log('🚀 ~ useLogin ~ err:', err);
      handleLogin();
    },
  });

  return {
    mutate: (body: Request['body']) => {
      console.log('body', body);

      if (!body?.email || !body?.password) {
        errorToast('Please enter your email and password');
        return;
      }

      mutate({
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/login`,
        body,
        auth: false,
      });
    },
    isPending,
    data,
    isSuccess,
  };
};

// const useLogout = (options = {}) => {
//   const response = useQuery(
//     [queryKey.logout],
//     () => api.get({ url: `${BASE_URL}/logout` }),
//     {
//       ...options,
//       onSuccess: () => {},
//       onError: () => {},
//     }
//   );

//   return response;
// };

const queries = {
  //  create: useCreate,
  login: useLogin,
  //   logout: useLogout
};

export default queries;
