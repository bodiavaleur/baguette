import axios from 'axios';
import {API_URL} from '~config/api';
import {tokenStorage} from '~helpers/storage';

const defaultConfig = {
  baseURL: API_URL,
};

export const api = axios.create(defaultConfig);

api.interceptors.request.use(async config => {
  const token = await tokenStorage.get();

  if (token) {
    config.headers!.authorization = `JWT ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err.response?.data ?? err.message);
  },
);
