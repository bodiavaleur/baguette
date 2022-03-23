import {DICTIONARY_ENDPOINTS} from '~config/api';
import {Dictionary, DictionaryStats} from '~types/dictionary';
import {DictionaryTags} from '~types/rtk/tags';
import {
  EditDictionaryArgs,
  GetDictionaryWordsArgs,
  UploadDictionaryImageArgs,
} from '~types/rtk/dictionary';
import api from '.';
import {Pagination} from '~types/pagination';
import {Word} from '~types/word';

const {MyDictionaries, CurrentDictionary, DictionaryWords} = DictionaryTags;
const {
  MY_DICTIONARIES,
  CREATE,
  EDIT,
  GET_BY_ID,
  UPLOAD_IMAGE,
  GET_STATS,
  GET_WORDS,
} = DICTIONARY_ENDPOINTS;

const dictionaryApi = api.injectEndpoints({
  endpoints: build => ({
    getMyDictionaries: build.query<Dictionary[], void>({
      providesTags: [MyDictionaries],
      query: () => ({url: MY_DICTIONARIES, method: 'GET'}),
    }),

    getDictionaryWords: build.query<Pagination<Word>, GetDictionaryWordsArgs>({
      providesTags: [DictionaryWords],
      query: params => ({url: GET_WORDS, method: 'GET', params}),
    }),

    getDictionaryById: build.query<Dictionary, string>({
      providesTags: [CurrentDictionary],
      query: dictionaryId => {
        const params = {dictionaryId};

        return {url: GET_BY_ID, method: 'GET', params};
      },
    }),

    createDictionary: build.mutation<Dictionary, Partial<Dictionary>>({
      invalidatesTags: [MyDictionaries],
      query: data => ({url: CREATE, method: 'POST', data}),
    }),

    editDictionary: build.mutation<Dictionary, EditDictionaryArgs>({
      invalidatesTags: [CurrentDictionary],
      query: data => ({url: EDIT, method: 'PUT', data}),
    }),

    uploadDictionaryImage: build.mutation<
      Dictionary,
      UploadDictionaryImageArgs
    >({
      invalidatesTags: [CurrentDictionary],
      query: ({dictionaryId, image}) => {
        const data = new FormData();
        const meta = {uri: image.path, type: image.mime, name: image.filename};
        const headers = {'Content-Type': 'multipart/form-data'};

        data.append('dictionaryId', dictionaryId);
        data.append('image', meta);

        return {url: UPLOAD_IMAGE, method: 'POST', data, headers};
      },
    }),

    getDictionaryStats: build.query<DictionaryStats, string>({
      query: dictionaryId => {
        const params = {dictionaryId};

        return {url: GET_STATS, method: 'GET', params};
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMyDictionariesQuery,
  useGetDictionaryWordsQuery,
  useGetDictionaryByIdQuery,
  useCreateDictionaryMutation,
  useEditDictionaryMutation,
  useUploadDictionaryImageMutation,
  useGetDictionaryStatsQuery,
} = dictionaryApi;

export default dictionaryApi;
