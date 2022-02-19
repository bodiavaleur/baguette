import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {DICTIONARY_ENDPOINTS} from '~config/api';
import {Dictionary} from '~types/dictionary';

const {GET_BY_ID} = DICTIONARY_ENDPOINTS;

export const fetchTrainingDictionary = createAsyncThunk<Dictionary, string>(
  'training/dictionary',
  async (dictionaryId, {rejectWithValue}) => {
    try {
      const {data} = await api.get(GET_BY_ID, {
        params: {dictionaryId},
      });

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
