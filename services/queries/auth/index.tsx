import {
  errorToast,
  //   handleErrors,
  //   saveLocalStorage,
  //   saveSessionStorage,
  successToast,
} from '../../helpers';
import { setCookie } from 'nookies';
import queryKey from './keys';
// import { routes } from '../../../navigation';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { routes } from '@/navigation';
import axios from 'axios';

// const BASE_URL = '/auth';

type Request = {
  url: string;
  body?: { email: string; password: string };
  auth?: boolean;
};

const useLogin = (options = {}) => {
  const navigate = useRouter();

  const handleLogin = () => {
    successToast('Sign in successful');
    navigate.push(routes.dashboard.entry.path);
  };

  const { mutate, isPending, data, isSuccess } = useMutation({
    mutationFn: async (args: Request) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Success!');
        }, 1500);
      });

      if (args.body?.email) {
        setCookie(null, 'email', args.body.email, {
          maxAge: 7 * 24 * 60 * 60,
          path: '/',
        });
        //   saveSessionStorage(args.body.email, 'email');
      }

      const response = await axios.post(args.url, args.body);
      return response;
    },
    mutationKey: [queryKey.login],
    ...options,
    onSuccess: (response: any) => {
      if (response.succeeded) {
        //   saveLocalStorage(response.data, config.tokenKey);
        successToast('Sign in successful');
        console.log('response', response);
        handleLogin();
      }
    },
    onError: (err: unknown) => {
      console.log('🚀 ~ useLogin ~ err:', err);
      handleLogin();
      //   errorToast(handleErrors(err));
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
