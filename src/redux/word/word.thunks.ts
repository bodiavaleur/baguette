import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {WORD_ENDPOINTS} from '~config/api';
import {FetchWordArgs, NewWordArgs, ThunkState} from './types';
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

export const createNewWord = createAsyncThunk<Word, NewWordArgs>(
  'word/createNewWord',
  async (newWord, {rejectWithValue}) => {
    try {
      const {data} = await api.post(ADD_WORD, newWord);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
