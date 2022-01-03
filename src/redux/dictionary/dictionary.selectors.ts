import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const dictionaryState = (state: RootState) => state.dictionary;

export const getMyDictionaries = createSelector(
  dictionaryState,
  ({myDictionaries}) => myDictionaries,
);

export const getCurrentDictionary = createSelector(
  dictionaryState,
  ({currentDictionary}) => currentDictionary,
);
