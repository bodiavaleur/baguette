import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

const appState = (state: RootState) => state.app;
