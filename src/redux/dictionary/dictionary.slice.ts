import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses} from '~types/statuses';
import {fetchUserDictionary} from './dictionary.thunks';
import {DictionarySliceState} from '~redux/dictionary/types';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [fetchUserDictionary.typePrefix];

const initialState: DictionarySliceState = {
  statuses: StatusGenerator.generateStatuses(statuses),
  dictionary: null,
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserDictionary.pending, state => {
        state.statuses[fetchUserDictionary.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(fetchUserDictionary.rejected, (state, {payload}) => {
        state.statuses[fetchUserDictionary.typePrefix] =
          StatusGenerator.setStatus(Rejected, payload);
      })
      .addCase(fetchUserDictionary.fulfilled, (state, {payload}) => {
        state.statuses[fetchUserDictionary.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);

        state.dictionary = payload;
      });
  },
});

export default dictionarySlice;
