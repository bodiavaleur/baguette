import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const trainingState = (state: RootState) => state.training;

export const getTrainingDictionary = createSelector(
  trainingState,
  ({trainingDictionary}) => trainingDictionary,
);
