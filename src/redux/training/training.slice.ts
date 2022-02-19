import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses} from '~types/statuses';
import {fetchTrainingDictionary} from './training.thunks';
import {TrainingSliceState} from './types';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [fetchTrainingDictionary.typePrefix];

const initialState: TrainingSliceState = {
  statuses: StatusGenerator.generateStatuses(statuses),
  trainingDictionary: null,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    clearTrainingDictionary: state => {
      state.trainingDictionary = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrainingDictionary.pending, state => {
        state.statuses[fetchTrainingDictionary.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchTrainingDictionary.rejected, (state, {payload}) => {
        state.statuses[fetchTrainingDictionary.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(fetchTrainingDictionary.fulfilled, (state, {payload}) => {
        state.statuses[fetchTrainingDictionary.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.trainingDictionary = payload;
      });
  },
});

export const {clearTrainingDictionary} = trainingSlice.actions;

export default trainingSlice;
