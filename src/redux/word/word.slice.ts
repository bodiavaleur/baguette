import {createSlice} from '@reduxjs/toolkit';
import {WordSliceState} from './types';

const initialState: WordSliceState = {
  currentWord: '',
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setCurrentWord: (state, {payload}) => {
      state.currentWord = payload;
    },
    clearCurrentWord: state => {
      state.currentWord = '';
    },
  },
});

export const {setCurrentWord, clearCurrentWord} = wordSlice.actions;

export default wordSlice;
