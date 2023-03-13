import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { login, logout, registration } from '../../services/user';
import { User, State } from '../../entities/User';
import { STATUS } from '../../entities/User/constants';

const user = localStorage.getItem('user');

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
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = null;
        state.errorMessage = null;
        state.user = action.payload;
        state.auth = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string>) => {
        state.status = STATUS.error;
        state.errorMessage = action.payload;
      })
      .addCase(registration.fulfilled, (state) => {
        state.status = STATUS.success;
        state.errorMessage = null;
      })
      .addCase(
        registration.rejected,
        (state, action: PayloadAction<string>) => {
          state.status = STATUS.error;
          state.errorMessage = action.payload;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
      });
  },
});

export default modalSlice.reducer;
