import axios from 'axios';
import {API_URL} from '~config/api';
import {storage} from '~helpers/storage';

const defaultConfig = {
  baseURL: API_URL,
};

export const api = axios.create(defaultConfig);

api.interceptors.request.use(async config => {
  const tokens = await storage.token.get();

  if (tokens) {
    config.headers!.authorization = `Bearer ${tokens.accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      storage.token.clear();
    }

    return Promise.reject(err.response?.data ?? err.message);
  },
);
