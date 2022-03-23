import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const trainingState = (state: RootState) => state.training;

export const selectTrainingDictionary = createSelector(
  trainingState,
  ({trainingDictionary}) => trainingDictionary,
);
