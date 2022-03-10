import {createSlice} from '@reduxjs/toolkit';
import {DictionarySliceState} from '~redux/dictionary/types';
import dictionaryApi from '~services/api/dictionary';

const {getDictionaryById} = dictionaryApi.endpoints;

const initialState: DictionarySliceState = {
  currentDictionary: '',
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setCurrentDictionary: (state, {payload}) => {
      state.currentDictionary = payload;
    },
    clearCurrentDictionary: state => {
      state.currentDictionary = '';
    },
  },
  extraReducers: builder => {
    builder.addMatcher(getDictionaryById.matchFulfilled, (state, {payload}) => {
      state.currentDictionary = payload._id;
    });
  },
});

export const {setCurrentDictionary, clearCurrentDictionary} =
  dictionarySlice.actions;

export default dictionarySlice;
