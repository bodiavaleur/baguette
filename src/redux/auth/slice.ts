import {createSlice} from '@reduxjs/toolkit';
import StatusGenerator from '~helpers/StatusGenerator';
import {SliceStatuses, StatusesCollection} from '~types/statuses';
import {authLogIn, authRegister} from '~redux/auth/thunks';

const {Pending, Rejected, Fulfilled} = SliceStatuses;

const statuses = [authLogIn.typePrefix, authRegister.typePrefix];

export interface AuthSliceState {
  statuses: StatusesCollection;
}

const initialState: AuthSliceState = {
  statuses: StatusGenerator.generateStatuses(statuses),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authLogIn.pending, state => {
        state.statuses[authLogIn.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(authLogIn.rejected, (state, {payload}) => {
        state.statuses[authLogIn.typePrefix] = StatusGenerator.setStatus(
          Rejected,
          payload,
        );
      })
      .addCase(authLogIn.fulfilled, state => {
        state.statuses[authLogIn.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      })

      .addCase(authRegister.pending, state => {
        state.statuses[authRegister.typePrefix] =
          StatusGenerator.setStatus(Pending);
      })
      .addCase(authRegister.rejected, state => {
        state.statuses[authRegister.typePrefix] =
          StatusGenerator.setStatus(Rejected);
      })
      .addCase(authRegister.fulfilled, state => {
        state.statuses[authRegister.typePrefix] =
          StatusGenerator.setStatus(Fulfilled);
      });
  },
});

export default authSlice;
