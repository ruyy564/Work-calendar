import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User, UserData } from '../entities/User';
import $api from '../http';

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
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const registration = createAsyncThunk<
  void,
  { email: string; password: string },
  {
    rejectValue: any;
  }
>('user/registration', async ({ email, password }, thunkAPI) => {
  try {
    await $api.post<UserData>('/auth/registration', {
      email,
      password,
    });
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
});
