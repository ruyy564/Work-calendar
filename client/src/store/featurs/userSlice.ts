import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { login, logout, registration } from '../../services/user';
import { User, State } from '../../entities/User';
import { STATUS } from '../../entities/User/constants';
import { LOCAL_STORAGE_USER } from '../../entities/User/constants';

const user = localStorage.getItem(LOCAL_STORAGE_USER);

const initialState: State = {
  user: user ? JSON.parse(user) : null,
  auth: Boolean(user),
  status: null,
  errorMessage: null,
};

export const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.status = null;
        state.errorMessage = null;
        state.user = payload;
        state.auth = true;
      })
      .addCase(login.rejected, (state, { payload }: PayloadAction<string>) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
        console.log('fsfaf');
      })
      .addCase(registration.fulfilled, (state) => {
        state.status = STATUS.success;
        state.errorMessage = null;
        console.log('fsfaf');
      })
      .addCase(
        registration.rejected,
        (state, { payload }: PayloadAction<string>) => {
          console.log('fsfaf');
          state.status = STATUS.error;
          state.errorMessage = payload;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
      });
  },
});

export default modalSlice.reducer;
