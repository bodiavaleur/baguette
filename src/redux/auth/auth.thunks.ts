import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginCredentials, RegisterCredentials} from '~types/auth';
import {api} from '~utils/api';
import {tokenStorage} from '~helpers/storage';
import {AUTH_ENDPOINTS} from '~config/api';

export const authLogIn = createAsyncThunk(
  'auth/logIn',
  async ({email, password}: LoginCredentials, {rejectWithValue}) => {
    try {
      const {data} = await api.post(AUTH_ENDPOINTS.LOGIN, {email, password});
      await tokenStorage.set(data.accessToken);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const authRegister = createAsyncThunk(
  'auth/register',
  async (
    {username, email, password}: RegisterCredentials,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await api.post(AUTH_ENDPOINTS.REGISTER, {
        username,
        email,
        password,
      });
      await tokenStorage.set(data.accessToken);

      return data;
    } catch (err) {
      console.log('[*] err: ', err);
      return rejectWithValue(err.error);
    }
  },
);