import {createSlice} from '@reduxjs/toolkit';
import {TrainingSliceState} from './types';

const initialState: TrainingSliceState = {
  trainingDictionary: '',
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    setTrainingDictionary: (state, {payload}) => {
      state.trainingDictionary = payload;
    },
    clearTrainingDictionary: state => {
      state.trainingDictionary = '';
    },
  },
});

export const {setTrainingDictionary, clearTrainingDictionary} =
  trainingSlice.actions;

export default trainingSlice;
