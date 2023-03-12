import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, Event, AddPieceWorkToEvent } from '../../entities/Event';
import {
  fetchEvents,
  createEvent,
  addPieceWorkToEvent,
  updateTamebasedEvent,
  updatePieceworkEvent,
  deletePiecework,
  deleteTimebased,
} from '../../services/event';

const initialState: State = {
  events: [],
};

export const eventSlice = createSlice({
  name: 'eventsOfCalendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchEvents.fulfilled,
        (state, action: PayloadAction<Event[]>) => {
          state.events = action.payload;
        }
      )
      .addCase(createEvent.fulfilled, (state, action: PayloadAction<Event>) => {
        state.events.push(action.payload);
      })
      .addCase(
        addPieceWorkToEvent.fulfilled,
        (state, action: PayloadAction<AddPieceWorkToEvent>) => {
          const event = state.events.find(
            (item) => item.id === action.payload.id
          );

          if (event) {
            event.pieceworks?.push(action.payload.piecework);
          }
        }
      )
      .addCase(
        updateTamebasedEvent.fulfilled,
        (state, action: PayloadAction<Event>) => {
          const event = state.events.find(
            (item) => item.id === action.payload.id
          );

          if (event) {
            event.timebased = action.payload.timebased;
          }
        }
      )
      .addCase(
        updatePieceworkEvent.fulfilled,
        (state, action: PayloadAction<any>) => {
          const event = state.events.find(
            (item) => item.id === action.payload.id
          );

          if (event) {
            const piecework = event.pieceworks?.find(
              (item) => item.id === action.payload.piecework.id
            );

            if (piecework) {
              piecework.cost = action.payload.piecework.cost;
              piecework.count = action.payload.piecework.count;
              piecework.name = action.payload.piecework.name;
            }
          }
        }
      )
      .addCase(
        deletePiecework.fulfilled,
        (state, action: PayloadAction<any>) => {
          const eventId = action.payload.eventId;
          const pieceworkId = action.payload.pieceworkId;
          const event = state.events.find((item) => item.id === eventId);

          if (event && event?.pieceworks && event.pieceworks.length > 1) {
            event.pieceworks = event.pieceworks.filter(
              (item) => item.id !== pieceworkId
            );
          } else {
            state.events = state.events.filter((item) => item.id !== eventId);
          }
        }
      )
      .addCase(
        deleteTimebased.fulfilled,
        (state, action: PayloadAction<any>) => {
          const eventId = action.payload.eventId;

          state.events = state.events.filter((item) => item.id !== eventId);
        }
      );
  },
});

export default eventSlice.reducer;
