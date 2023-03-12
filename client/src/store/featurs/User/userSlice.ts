import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../../http';

type State = {
  user: User | null;
  auth: boolean;
  error: string | null;
};

type User = {
  id: number;
  email: string;
};

type UserData = {
  user: User;
  accessToken: string;
};

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  {
    rejectValue: any;
  }
>('user/login', async ({ email, password }, thunkAPI) => {
  try {
    const { data } = await $api.post<UserData>('/auth/login', {
      email,
      password,
    });

    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
  } catch (e) {
    return thunkAPI.rejectWithValue('Неверные данные');
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
});

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
