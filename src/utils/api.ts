import axios from 'axios';
import {API_URL} from '~config/api';
import {tokenStorage} from '~helpers/storage';
import {Navigation} from '~helpers/Navigation';
import {AuthRoutes} from '~navigation/routes';

const defaultConfig = {
  baseURL: API_URL,
};

export const api = axios.create(defaultConfig);

api.interceptors.request.use(async config => {
  const tokens = await tokenStorage.get();

  if (tokens) {
    config.headers!.authorization = `Bearer ${tokens.accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      tokenStorage.clear();

      Navigation.reset(AuthRoutes.Root);
    }

    return Promise.reject(err.response?.data ?? err.message);
  },
);
