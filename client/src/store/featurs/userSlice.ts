import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { login, logout, registration } from '../../services/user';
import { User, State, ResponseError } from '../../entities/User';
import { STATUS } from '../../constants';
import { LOCAL_STORAGE_USER } from '../../entities/User/constants';

const user = localStorage.getItem(LOCAL_STORAGE_USER);

const initialState: State = {
  user: user ? JSON.parse(user) : null,
  auth: Boolean(user),
  status: null,
  errors: null,
  message: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = null;
      state.errors = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.status = STATUS.success;
        state.user = payload;
        state.auth = true;
      })
      .addCase(login.pending, (state) => {
        state.status = STATUS.loading;
        state.errors = null;
        state.message = null;
      })
      .addCase(
        login.rejected,
        (state, { payload }: PayloadAction<ResponseError>) => {
          state.status = STATUS.error;
          state.errors = payload.errors;
          state.message = payload.message;
        }
      )
      .addCase(registration.fulfilled, (state) => {
        state.status = STATUS.success;
      })
      .addCase(registration.pending, (state) => {
        state.status = STATUS.loading;
        state.errors = null;
        state.message = null;
      })
      .addCase(
        registration.rejected,
        (state, { payload }: PayloadAction<ResponseError>) => {
          state.status = STATUS.error;
          state.errors = payload.errors;
          state.message = payload.message;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
        state.status = null;
        state.errors = null;
        state.message = null;
      });
  },
});

export const { resetStatus } = userSlice.actions;

export default userSlice.reducer;
