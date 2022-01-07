import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {WORD_ENDPOINTS} from '~config/api';
import {
  EditWordArgs,
  FetchWordArgs,
  NewWordArgs,
  UploadWordImageArgs,
} from './types';
import {Word} from '~types/word';

const {ADD, WORD, EDIT, DELETE, UPLOAD_IMAGE} = WORD_ENDPOINTS;

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
      const {data} = await api.post(ADD, newWord);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const editWord = createAsyncThunk<Word, EditWordArgs>(
  'word/editWord',
  async (newWord, {rejectWithValue}) => {
    try {
      const {data} = await api.put(EDIT, newWord);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const deleteWord = createAsyncThunk<Word, EditWordArgs>(
  'word/deleteWord',
  async (wordId, {rejectWithValue}) => {
    try {
      const {data} = await api.delete(DELETE, {data: {wordId}});

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const uploadWordImage = createAsyncThunk<Word, UploadWordImageArgs>(
  'word/uploadWordImage',
  async ({wordId, image}, {rejectWithValue}) => {
    try {
      const form = new FormData();

      form.append('wordId', wordId);
      form.append('image', {
        uri: image.path,
        type: image.mime,
        name: image.filename,
      });

      const {data} = await api.post(UPLOAD_IMAGE, form, {
        headers: {'Content-Type': 'multipart/form-data'},
      });

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
