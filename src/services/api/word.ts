import {WORD_ENDPOINTS} from '~config/api';
import {WordTags, DictionaryTags} from '~types/rtk/api';
import {EditWordArgs, NewWordArgs, UploadWordImageArgs} from '~types/rtk/word';
import {Word} from '~types/word';
import api from '.';

const {ADD, WORD, EDIT, DELETE, UPLOAD_IMAGE} = WORD_ENDPOINTS;

export const wordApi = api.injectEndpoints({
  endpoints: build => ({
    getWordById: build.query<Word, string>({
      providesTags: [WordTags.Word],
      query: wordId => ({url: WORD, method: 'GET', params: {wordId}}),
    }),
    createWord: build.mutation<Word, NewWordArgs>({
      invalidatesTags: [DictionaryTags.CurrentDictionary],
      query: data => ({url: ADD, method: 'POST', data}),
    }),
    editWord: build.mutation<Word, EditWordArgs>({
      invalidatesTags: [WordTags.Word],
      query: data => ({url: EDIT, method: 'PUT', data}),
    }),
    deleteWord: build.mutation<Word, string>({
      invalidatesTags: [DictionaryTags.CurrentDictionary],
      query: wordId => ({url: DELETE, method: 'DELETE', data: {wordId}}),
    }),
    uploadWordImage: build.mutation<Word, UploadWordImageArgs>({
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
  useCreateWordMutation,
  useEditWordMutation,
  useDeleteWordMutation,
  useUploadWordImageMutation,
} = wordApi;

export default wordApi;
