import {WORD_ENDPOINTS} from '~config/api';
import {WordTags, DictionaryTags} from '~types/rtk/tags';
import {EditWordArgs, NewWordArgs, UploadWordImageArgs} from '~types/rtk/word';
import {Word as WordType} from '~types/word';
import api from '.';
import {Pagination, PaginationQuery} from '~types/pagination';

const {Word, MyWords} = WordTags;
const {DictionaryWords} = DictionaryTags;
const {ADD, WORD, EDIT, DELETE, UPLOAD_IMAGE, GET_MY_WORDS} = WORD_ENDPOINTS;

export const wordApi = api.injectEndpoints({
  endpoints: build => ({
    getWordById: build.query<WordType, string>({
      providesTags: [Word],
      query: wordId => ({url: WORD, method: 'GET', params: {wordId}}),
    }),
    getMyWords: build.query<Pagination<WordType>, PaginationQuery>({
      providesTags: [MyWords],
      query: params => ({url: GET_MY_WORDS, method: 'GET', params}),
    }),
    createWord: build.mutation<WordType, NewWordArgs>({
      invalidatesTags: [MyWords, DictionaryWords],
      query: data => ({url: ADD, method: 'POST', data}),
    }),
    editWord: build.mutation<WordType, EditWordArgs>({
      invalidatesTags: [MyWords, DictionaryWords, Word],
      query: data => ({url: EDIT, method: 'PUT', data}),
    }),
    deleteWord: build.mutation<WordType, string>({
      invalidatesTags: [MyWords, DictionaryWords, Word],
      query: wordId => ({url: DELETE, method: 'DELETE', data: {wordId}}),
    }),
    uploadWordImage: build.mutation<WordType, UploadWordImageArgs>({
      invalidatesTags: [DictionaryTags.CurrentDictionary],
      query: ({wordId, image}) => {
        const data = new FormData();
        const meta = {uri: image.path, type: image.mime, name: image.filename};
        const headers = {'Content-Type': 'multipart/form-data'};

        data.append('wordId', wordId);
        data.append('image', meta);

        return {url: UPLOAD_IMAGE, method: 'POST', data, headers};
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetWordByIdQuery,
  useGetMyWordsQuery,
  useCreateWordMutation,
  useEditWordMutation,
  useDeleteWordMutation,
  useUploadWordImageMutation,
} = wordApi;

export default wordApi;
