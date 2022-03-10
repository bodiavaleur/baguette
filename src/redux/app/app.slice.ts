import {createSlice} from '@reduxjs/toolkit';
import {AppSliceState} from './types';

const initialState: AppSliceState = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice;
