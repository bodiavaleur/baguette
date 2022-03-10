import {createAsyncThunk} from '@reduxjs/toolkit';
import {storage} from '~helpers/storage';
import {ThunkState} from '~redux/index';
import {removeAuthentication} from './auth.slice';

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
