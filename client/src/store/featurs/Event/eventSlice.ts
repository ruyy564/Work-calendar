import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, Event, AddPieceWorkToEvent } from '../../../entities/Event';
import {
  fetchEvents,
  createEvent,
  addPieceWorkToEvent,
  updateTamebasedEvent,
  updatePieceworkEvent,
} from './actions';

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
      );
  },
});

export default eventSlice.reducer;
