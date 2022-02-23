import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api';
import {DICTIONARY_ENDPOINTS, TRAINING_ENDPOINTS} from '~config/api';
import {Dictionary} from '~types/dictionary';
import {Word} from '~types/word';
import {TrainingIntensity} from '~types/training';
import {FlashcardTrainingArgs} from '~redux/training/types';

const {GET_BY_ID} = DICTIONARY_ENDPOINTS;
const {FLASHCARD} = TRAINING_ENDPOINTS;

export const fetchTrainingDictionary = createAsyncThunk<Dictionary, string>(
  'training/dictionary',
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

export const increaseFlashcardIntensity = createAsyncThunk<
  Word,
  FlashcardTrainingArgs
>('training/increaseIntensity', async ({wordId}, {rejectWithValue}) => {
  try {
    const args = {wordId, action: TrainingIntensity.Increase};
    const {data} = await api.post(FLASHCARD, args);

    return data;
  } catch (err) {
    return rejectWithValue(err.error);
  }
});

export const decreaseFlashcardIntensity = createAsyncThunk<
  Word,
  FlashcardTrainingArgs
>('training/decreaseIntensity', async ({wordId}, {rejectWithValue}) => {
  try {
    const args = {wordId, action: TrainingIntensity.Decrease};
    const {data} = await api.post(FLASHCARD, args);

    return data;
  } catch (err) {
    return rejectWithValue(err.error);
  }
});
