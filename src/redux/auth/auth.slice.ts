import {createSlice} from '@reduxjs/toolkit';
import authApi from '~services/api/auth';
import {Token} from '~types/token';
import {storage} from '~helpers/storage';
import {AuthSliceState} from './types';

const {login, register} = authApi.endpoints;

const initialState: AuthSliceState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: state => {
      state.isAuthenticated = true;
    },
    removeAuthentication: state => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(login.matchFulfilled, (state, {payload}) => {
      storage.token.set({[Token.Access]: payload.accessToken});
    });
    builder.addMatcher(register.matchFulfilled, (state, {payload}) => {
      storage.token.set({[Token.Access]: payload.accessToken});
    });
  },
});

export const {authenticateUser, removeAuthentication} = authSlice.actions;

export default authSlice;
