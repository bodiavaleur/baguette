import {configureStore} from '@reduxjs/toolkit';
import appSlice from './app/app.slice';
import authSlice from './auth/auth.slice';
import dictionarySlice from './dictionary/dictionary.slice';
import wordSlice from './word/word.slice';
import {authMiddleware} from '~redux/middleware/auth.middleware';
import trainingSlice from '~redux/training/training.slice';
import api from '~services/api';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    dictionary: dictionarySlice.reducer,
    word: wordSlice.reducer,
    training: trainingSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkState = {state: RootState};
