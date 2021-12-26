import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {WORD_ENDPOINTS} from '~config/api';
import {FetchWordArgs, ThunkState} from './types';
import {Word} from '~types/word';

const {ADD_WORD, WORD} = WORD_ENDPOINTS;

export const fetchWordById = createAsyncThunk<Word, FetchWordArgs>(
  'word/fetchWordById',
  async ({wordId}, {rejectWithValue}) => {
    try {
      const {data} = await api.get(WORD, {params: {wordId}});

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const createNewWord = createAsyncThunk<Word, Partial<Word>, ThunkState>(
  'word/createNewWord',
  async (word, {rejectWithValue, getState}) => {
    try {
      const {dictionary} = getState().dictionary;
      const dictionaryId = dictionary?._id ?? '';

      const {data} = await api.post(ADD_WORD, {...word, dictionaryId});

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
