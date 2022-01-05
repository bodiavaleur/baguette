import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses} from '~types/statuses';
import {
  fetchWordById,
  createNewWord,
  editWord,
  deleteWord,
} from './word.thunks';
import {WordSliceState} from './types';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [
  fetchWordById.typePrefix,
  createNewWord.typePrefix,
  editWord.typePrefix,
  deleteWord.typePrefix,
];

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
      })

      .addCase(editWord.pending, state => {
        state.statuses[editWord.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(editWord.rejected, (state, {payload}) => {
        state.statuses[editWord.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(editWord.fulfilled, (state, {payload}) => {
        state.statuses[editWord.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.currentWord = payload;
      })

      .addCase(deleteWord.pending, state => {
        state.statuses[deleteWord.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(deleteWord.rejected, (state, {payload}) => {
        state.statuses[deleteWord.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(deleteWord.fulfilled, state => {
        state.statuses[deleteWord.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.currentWord = null;
      });
  },
});

export const {clearCurrentWord} = wordSlice.actions;

export default wordSlice;
