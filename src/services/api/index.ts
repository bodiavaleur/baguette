import {createApi} from '@reduxjs/toolkit/query/react';
import {DictionaryTags, WordTags, TrainingTags} from '~types/rtk/api';
import {axiosBaseQuery} from '~utils/axiosBaseQuery';

const {Word} = WordTags;
const {MyDictionaries, CurrentDictionary} = DictionaryTags;
const {TrainingDictionary} = TrainingTags;

const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: [Word, MyDictionaries, CurrentDictionary, TrainingDictionary],
  endpoints: () => ({}),
});

export default api;
