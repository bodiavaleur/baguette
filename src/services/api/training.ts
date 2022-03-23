import {TRAINING_ENDPOINTS, DICTIONARY_ENDPOINTS} from '~config/api';
import {TrainingTags} from '~types/rtk/tags';
import {Word} from '~types/word';
import api from '.';
import {TrainingIntensity} from '~types/training';
import {Pagination} from '~types/pagination';
import {GetDictionaryWordsArgs} from '~types/rtk/dictionary';

const {TrainingDictionary} = TrainingTags;
const {FLASHCARD} = TRAINING_ENDPOINTS;
const {GET_WORDS} = DICTIONARY_ENDPOINTS;

export const trainingApi = api.injectEndpoints({
  endpoints: build => ({
    getTrainingDictionary: build.query<
      Pagination<Word>,
      GetDictionaryWordsArgs
    >({
      providesTags: [TrainingDictionary],
      query: params => ({url: GET_WORDS, method: 'GET', params}),
    }),
    increaseFlashcardIntensity: build.mutation<Word, string>({
      query: wordId => {
        const data = {wordId, action: TrainingIntensity.Increase};

        return {url: FLASHCARD, method: 'POST', data};
      },
    }),
    decreaseFlashcardIntensity: build.mutation<Word, string>({
      query: wordId => {
        const data = {wordId, action: TrainingIntensity.Decrease};

        return {url: FLASHCARD, method: 'POST', data};
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetTrainingDictionaryQuery,
  useIncreaseFlashcardIntensityMutation,
  useDecreaseFlashcardIntensityMutation,
} = trainingApi;

export default trainingApi;
