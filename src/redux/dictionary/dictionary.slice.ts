import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses} from '~types/statuses';
import {
  createDictionary,
  editDictionary,
  fetchDictionaryById,
  fetchDictionaryStats,
  fetchMyDictionaries,
  uploadDictionaryImage,
} from './dictionary.thunks';
import {DictionarySliceState} from '~redux/dictionary/types';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [
  fetchMyDictionaries.typePrefix,
  createDictionary.typePrefix,
  editDictionary.typePrefix,
  fetchDictionaryById.typePrefix,
  uploadDictionaryImage.typePrefix,
  fetchDictionaryStats.typePrefix,
];

const initialState: DictionarySliceState = {
  statuses: StatusGenerator.generateStatuses(statuses),
  myDictionaries: [],
  currentDictionary: null,
  currentDictionaryStats: null,
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    clearCurrentDictionary: state => {
      state.currentDictionary = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMyDictionaries.pending, state => {
        state.statuses[fetchMyDictionaries.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchMyDictionaries.rejected, (state, {payload}) => {
        state.statuses[fetchMyDictionaries.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(fetchMyDictionaries.fulfilled, (state, {payload}) => {
        state.statuses[fetchMyDictionaries.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.myDictionaries = payload;
      })

      .addCase(createDictionary.pending, state => {
        state.statuses[createDictionary.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(createDictionary.rejected, (state, {payload}) => {
        state.statuses[createDictionary.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(createDictionary.fulfilled, state => {
        state.statuses[createDictionary.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      })

      .addCase(editDictionary.pending, state => {
        state.statuses[editDictionary.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(editDictionary.rejected, (state, {payload}) => {
        state.statuses[editDictionary.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(editDictionary.fulfilled, state => {
        state.statuses[editDictionary.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      })

      .addCase(fetchDictionaryById.pending, state => {
        state.statuses[fetchDictionaryById.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchDictionaryById.rejected, (state, {payload}) => {
        state.statuses[fetchDictionaryById.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(fetchDictionaryById.fulfilled, (state, {payload}) => {
        state.statuses[fetchDictionaryById.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.currentDictionary = payload;
      })

      .addCase(uploadDictionaryImage.pending, state => {
        state.statuses[uploadDictionaryImage.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(uploadDictionaryImage.rejected, (state, {payload}) => {
        state.statuses[uploadDictionaryImage.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(uploadDictionaryImage.fulfilled, (state, {payload}) => {
        state.statuses[uploadDictionaryImage.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      })

      .addCase(fetchDictionaryStats.pending, state => {
        state.statuses[fetchDictionaryStats.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchDictionaryStats.rejected, (state, {payload}) => {
        state.statuses[fetchDictionaryStats.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(fetchDictionaryStats.fulfilled, (state, {payload}) => {
        state.statuses[fetchDictionaryStats.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.currentDictionaryStats = payload;
      });
  },
});

export const {clearCurrentDictionary} = dictionarySlice.actions;

export default dictionarySlice;
