import {createApi} from '@reduxjs/toolkit/query/react';
import {DictionaryTags, WordTags, TrainingTags} from '~types/rtk/tags';
import {axiosBaseQuery} from '~utils/axiosBaseQuery';

const wordTags = Object.values(WordTags);
const dictionaryTags = Object.values(DictionaryTags);
const trainingTags = Object.values(TrainingTags);

const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: [...wordTags, ...dictionaryTags, ...trainingTags],
  endpoints: () => ({}),
});

export default api;
