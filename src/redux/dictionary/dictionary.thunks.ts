import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {DICTIONARY_ENDPOINTS} from '~config/api';
import {Dictionary} from '~types/dictionary';

const {USER_DICTIONARY} = DICTIONARY_ENDPOINTS;

export const fetchUserDictionary = createAsyncThunk<Dictionary, undefined>(
  'dictionary/fetchUserDictionary',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await api.get(USER_DICTIONARY);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
