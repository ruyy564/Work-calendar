import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User, UserDataRequest, UserDataResponse } from '../entities/User';
import {
  LOCAL_STORAGE_USER,
  LOCAL_STORAGE_TOKEN,
} from '../entities/User/constants';
import $api from '../http';
import { ResponseError } from '../entities/User';

export const login = createAsyncThunk<
  User,
  UserDataRequest,
  {
    rejectValue: any;
  }
>('user/login', async ({ email, password }, thunkAPI) => {
  try {
    const { data } = await $api.post<UserDataResponse>('/auth/login', {
      email,
      password,
    });

    localStorage.setItem(LOCAL_STORAGE_TOKEN, data.accessToken);
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data.user));

    return data.user;
  } catch (e) {
    const error = e as AxiosError<ResponseError>;

    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

export const registration = createAsyncThunk<
  void,
  UserDataRequest,
  {
    rejectValue: any;
  }
>('user/registration', async ({ email, password }, thunkAPI) => {
  try {
    await $api.post<UserDataResponse>('/auth/registration', {
      email,
      password,
    });
  } catch (e) {
    const error = e as AxiosError<ResponseError>;

    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_USER);
});
