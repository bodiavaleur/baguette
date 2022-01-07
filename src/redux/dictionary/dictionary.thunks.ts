import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {DICTIONARY_ENDPOINTS} from '~config/api';
import {Dictionary} from '~types/dictionary';
import {
  EditDictionaryArgs,
  UploadDictionaryImageArgs,
} from '~redux/dictionary/types';
import {Word} from '~types/word';
import {UploadWordImageArgs} from '~redux/word/types';

const {MY_DICTIONARIES, CREATE, EDIT, GET_BY_ID, UPLOAD_IMAGE} =
  DICTIONARY_ENDPOINTS;

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

export const uploadDictionaryImage = createAsyncThunk<
  Dictionary,
  UploadDictionaryImageArgs
>('word/uploadWordImage', async ({dictionaryId, image}, {rejectWithValue}) => {
  try {
    const form = new FormData();

    form.append('dictionaryId', dictionaryId);
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
});
