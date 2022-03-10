import {TRAINING_ENDPOINTS, DICTIONARY_ENDPOINTS} from '~config/api';
import {TrainingTags} from '~types/rtk/api';
import {Word} from '~types/word';
import api from '.';
import {Dictionary} from '~types/dictionary';
import {TrainingIntensity} from '~types/training';

const {TrainingDictionary} = TrainingTags;
const {FLASHCARD} = TRAINING_ENDPOINTS;
const {GET_BY_ID} = DICTIONARY_ENDPOINTS;

export const trainingApi = api.injectEndpoints({
  endpoints: build => ({
    getTrainingDictionary: build.query<Dictionary, string>({
      providesTags: [TrainingDictionary],
      query: dictionaryId => {
        const params = {dictionaryId};

        return {url: GET_BY_ID, method: 'GET', params};
      },
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
