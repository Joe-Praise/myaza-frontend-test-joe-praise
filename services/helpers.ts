import { Id, toast } from 'react-toastify';

export const errorToast = (message = 'Something went wrong', toastId?: Id) => {
  toast.error(message, {
    toastId,
    theme: 'dark',
    hideProgressBar: true,
    position: 'bottom-right',
  });
};

export const successToast = (message = 'Successful', toastId?: Id) => {
  toast.success(message, {
    toastId,
    theme: 'dark',
    hideProgressBar: true,
    position: 'bottom-right',
  });
};

export const getQueryKeys = (namespace: string) => ({
  create: `${namespace}/create`,
  read: `${namespace}/read`,
  readOne: `${namespace}/readOne`,
  update: `${namespace}/update`,
  patch: `${namespace}/patch`,
  put: `${namespace}/put`,
  delete: `${namespace}/delete`,
});

export function handleErrors(err: any) {
  const { response, message } = err;
  const { data } = response;

  if (!data) return message;

  const errorMessage: string = data?.message || 'Something went wrong';

  return errorMessage;
}
