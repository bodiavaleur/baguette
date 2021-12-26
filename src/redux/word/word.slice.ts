import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses} from '~types/statuses';
import {fetchWordById, createNewWord} from './word.thunks';
import {WordSliceState} from './types';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [fetchWordById.typePrefix, createNewWord.typePrefix];

const initialState: WordSliceState = {
  statuses: StatusGenerator.generateStatuses(statuses),
  currentWord: null,
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    clearCurrentWord: state => {
      state.currentWord = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWordById.pending, state => {
        state.statuses[fetchWordById.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchWordById.rejected, (state, {payload}) => {
        state.statuses[fetchWordById.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(fetchWordById.fulfilled, (state, {payload}) => {
        state.statuses[fetchWordById.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.currentWord = payload;
      })

      .addCase(createNewWord.pending, state => {
        state.statuses[createNewWord.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(createNewWord.rejected, (state, {payload}) => {
        state.statuses[createNewWord.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(createNewWord.fulfilled, state => {
        state.statuses[createNewWord.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      });
  },
});

export const {clearCurrentWord} = wordSlice.actions;

export default wordSlice;
