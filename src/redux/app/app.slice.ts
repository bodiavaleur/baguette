import {createSlice} from '@reduxjs/toolkit';
import {AppSliceState} from './types';

const initialState: AppSliceState = {
  isAuthenticated: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticateUser: state => {
      state.isAuthenticated = true;
    },
    removeAuthentication: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {authenticateUser, removeAuthentication} = appSlice.actions;

export default appSlice;
