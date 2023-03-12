import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  Piecework,
  Event,
  AddPieceWorkToEvent,
  CreateEvent,
} from '../../../entities/Event';
import $api from '../../../http';
import getUserId from '../../../helpers/getUserId';

export const fetchEvents = createAsyncThunk<
  Event[],
  void,
  {
    rejectValue: any;
  }
>('eventsOfCalendar/fetchEvents', async (_, thunkAPI) => {
  try {
    const { data } = await $api.post<Event[]>('/event/getevents', {
      userId: getUserId(),
    });

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован');
  }
});

export const addPieceWorkToEvent = createAsyncThunk<
  AddPieceWorkToEvent,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/addPieceWorkToEvent', async ({ event }, thunkAPI) => {
  try {
    const { date, piecework } = event;
    const { data } = await $api.post<AddPieceWorkToEvent>(
      '/event/addPiecework',
      {
        userId: getUserId(),
        date,
        piecework,
      }
    );

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован');
  }
});

export const createEvent = createAsyncThunk<
  Event,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/createEvent', async ({ event }, thunkAPI) => {
  try {
    const { date, piecework, timebased } = event;
    const { data } = await $api.post<Event>('/event/create', {
      userId: getUserId(),
      date,
      piecework,
      timebased,
    });

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован');
  }
});

export const updateTamebasedEvent = createAsyncThunk<
  Event,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/updateTamebasedEvent', async ({ event }, thunkAPI) => {
  try {
    const { date, timebased } = event;
    const { data } = await $api.post<Event>('/event/updatetimebased', {
      userId: getUserId(),
      date,
      timebased,
    });

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован');
  }
});

export const updatePieceworkEvent = createAsyncThunk<
  Event,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/updatePieceworkEvent', async ({ event }, thunkAPI) => {
  try {
    const { date, piecework } = event;
    const { data } = await $api.post<AddPieceWorkToEvent>(
      '/event/updatepiecework',
      {
        userId: getUserId(),
        date,
        piecework,
      }
    );

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован');
  }
});
