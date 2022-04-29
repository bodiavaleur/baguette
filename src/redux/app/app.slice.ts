import {createSlice} from '@reduxjs/toolkit';
import {AppSliceState} from './types';
import {Language} from '~config/language';
import {storage} from '~helpers/storage';

const initialState: AppSliceState = {
  language: Language.English,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage: (state, {payload}) => {
      state.language = payload;
      storage.language.set(payload);
    },
  },
});

export const {changeLanguage} = appSlice.actions;

export default appSlice;
