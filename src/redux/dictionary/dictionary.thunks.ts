import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {DICTIONARY_ENDPOINTS} from '~config/api';
import {Dictionary} from '~types/dictionary';
import {EditDictionaryArgs} from '~redux/dictionary/types';

const {MY_DICTIONARIES, CREATE, EDIT, GET_BY_ID} = DICTIONARY_ENDPOINTS;

export const fetchMyDictionaries = createAsyncThunk<Dictionary[], undefined>(
  'dictionary/fetchMyDictionaries',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await api.get(MY_DICTIONARIES);

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const fetchDictionaryById = createAsyncThunk<Dictionary, string>(
  'dictionary/dictionaryById',
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

export const createDictionary = createAsyncThunk<
  Dictionary,
  Partial<Dictionary>
>(
  'dictionary/createDictionary',
  async ({name, description, image}, {rejectWithValue}) => {
    try {
      const {data} = await api.post(CREATE, {name, description, image});

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);

export const editDictionary = createAsyncThunk<Dictionary, EditDictionaryArgs>(
  'dictionary/editDictionary',
  async ({dictionaryId, name, description, image}, {rejectWithValue}) => {
    try {
      const {data} = await api.put(EDIT, {
        dictionaryId,
        name,
        description,
        image,
      });

      return data;
    } catch (err) {
      return rejectWithValue(err.error);
    }
  },
);
