import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginCredentials, RegisterCredentials} from '~types/auth';
import {api} from '~utils/api';
import {storage} from '~helpers/storage';
import {AUTH_ENDPOINTS} from '~config/api';
import {Token} from '~types/token';
import {ThunkState} from '~redux/index';
import {removeAuthentication} from '~redux/app/app.slice';

export const authLogIn = createAsyncThunk(
  'auth/logIn',
  async ({email, password}: LoginCredentials, {rejectWithValue}) => {
    try {
      const {data} = await api.post(AUTH_ENDPOINTS.LOGIN, {email, password});
      await storage.token.set({[Token.Access]: data.accessToken});

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
      await storage.token.set({[Token.Access]: data.accessToken});

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const authLogout = createAsyncThunk<undefined, undefined, ThunkState>(
  'auth/logout',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      await storage.token.clear();
      await storage.lastUsedDictionary.clear();
      await storage.trainingDictionary.clear();
      dispatch(removeAuthentication());
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
