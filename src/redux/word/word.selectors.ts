import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const wordState = (state: RootState) => state.word;

export const selectCurrentWord = createSelector(
  wordState,
  ({currentWord}) => currentWord,
);
