import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout } from '../../services/user';

type State = {
  user: User | null;
  auth: boolean;
  error: string | null;
};

type User = {
  id: number;
  email: string;
};

const user = localStorage.getItem('user');

const initialState: State = {
  user: user ? JSON.parse(user) : null,
  auth: Boolean(user),
  error: null,
};

export const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.auth = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
      });
  },
});

export default modalSlice.reducer;
