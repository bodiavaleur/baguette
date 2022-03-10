import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const dictionaryState = (state: RootState) => state.dictionary;

export const selectCurrentDictionary = createSelector(
  dictionaryState,
  ({currentDictionary}) => currentDictionary,
);
