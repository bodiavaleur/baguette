import {configureStore} from '@reduxjs/toolkit';
import authSlice from '~redux/auth/auth.slice';
import dictionarySlice from '~redux/dictionary/dictionary.slice';
import wordSlice from '~redux/word/word.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dictionary: dictionarySlice.reducer,
    word: wordSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
