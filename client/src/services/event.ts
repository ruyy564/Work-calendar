import { createAsyncThunk } from '@reduxjs/toolkit';

import { Event, ChangePiecework, CreateEvent } from '../entities/Event';
import $api from '../http';
import getUserId from '../helpers/getUserId';
import { AxiosError } from 'axios';

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
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const addPieceWorkToEvent = createAsyncThunk<
  ChangePiecework,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/addPieceWorkToEvent', async ({ event }, thunkAPI) => {
  try {
    const { piecework } = event;
    const { data } = await $api.post<ChangePiecework>('/event/piecework', {
      userId: getUserId(),
      eventId: piecework?.EventId,
      piecework,
    });

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
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
    setTimeout(() => {}, 5000);
    const { date, piecework, timebased } = event;
    const { data } = await $api.post<Event>('/event/event', {
      userId: getUserId(),
      date,
      piecework,
      timebased,
    });

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
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
    const { timebased } = event;
    const { data } = await $api.put<Event>('/event/timebased', {
      userId: getUserId(),
      eventId: timebased?.EventId,
      timebased,
    });

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const updatePieceworkEvent = createAsyncThunk<
  ChangePiecework,
  { event: CreateEvent },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/updatePieceworkEvent', async ({ event }, thunkAPI) => {
  try {
    const { date, piecework } = event;
    const { data } = await $api.put<ChangePiecework>('/event/piecework', {
      userId: getUserId(),
      date,
      piecework,
    });

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const deleteTimebased = createAsyncThunk<
  { eventId: string },
  { eventId: string },
  {
    rejectValue: any;
  }
>('eventsOfCalendar/deleteTimebased', async ({ eventId }, thunkAPI) => {
  try {
    const { data } = await $api.delete<{ eventId: string }>(
      '/event/timebased',
      { data: { eventId } }
    );

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const deletePiecework = createAsyncThunk<
  { eventId: string; pieceworkId: string },
  { eventId: string; pieceworkId: string },
  {
    rejectValue: any;
  }
>(
  'eventsOfCalendar/deletePiecework',
  async ({ eventId, pieceworkId }, thunkAPI) => {
    try {
      const { data } = await $api.delete<{
        eventId: string;
        pieceworkId: string;
      }>('/event/piecework', { data: { eventId, pieceworkId } });

      return data;
    } catch (e) {
      const error = e as AxiosError<{ message: string }>;

      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);
