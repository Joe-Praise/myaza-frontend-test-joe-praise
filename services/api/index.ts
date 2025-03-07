import axios from 'axios';
import axiosInstance from '../axiosConfig';

const baseUrl = '/auth';

type Request = {
  url: string;
  body?: any;
  auth?: boolean;
};

const del = async ({ url, body: data }: Request) =>
  (
    await axiosInstance.delete(url, {
      data,
    })
  ).data;

const get = async ({ url, auth = true }: Request) => {
  return (await (auth ? axiosInstance.get(url) : axios.get(baseUrl + url)))
    .data;
};

const post = async ({ url, body, auth = true }: Request) => {
  const options = {
    headers: {},
  };

  return (
    await (auth
      ? axiosInstance.post(url, body)
      : axios.post(baseUrl + url, body, options))
  ).data;
};

const patch = async ({ url, body }: Request) =>
  (await axiosInstance.patch(url, body)).data;

const put = async ({ url, body }: Request) =>
  (await axiosInstance.put(url, body)).data;

const api = {
  delete: del,
  get,
  patch,
  post,
  put,
};

export default api;
