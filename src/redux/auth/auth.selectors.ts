import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const authState = (state: RootState) => state.auth;

export const getIsAuthenticated = createSelector(
  authState,
  ({isAuthenticated}) => isAuthenticated,
);
