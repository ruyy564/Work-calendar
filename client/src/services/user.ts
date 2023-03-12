import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../http';

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
