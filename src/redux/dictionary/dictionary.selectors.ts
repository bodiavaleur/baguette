import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const dictionaryState = (state: RootState) => state.dictionary;

export const getUserDictionary = createSelector(
  dictionaryState,
  ({dictionary}) => dictionary,
);
