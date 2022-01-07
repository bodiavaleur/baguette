import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const wordState = (state: RootState) => state.word;

export const getWordStatuses = createSelector(
  wordState,
  ({statuses}) => statuses,
);

export const getCurrentWord = createSelector(
  wordState,
  ({currentWord}) => currentWord,
);
