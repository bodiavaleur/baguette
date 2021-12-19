import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const authState = (state: RootState) => state.auth;

export const getAuthStatuses = createSelector(
  authState,
  ({statuses}) => statuses,
);
