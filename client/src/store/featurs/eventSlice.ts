import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, Event, ChangePiecework } from '../../entities/Event';
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
        (state, { payload }: PayloadAction<Event[]>) => {
          state.events = payload;
        }
      )
      .addCase(
        createEvent.fulfilled,
        (state, { payload }: PayloadAction<Event>) => {
          state.events.push(payload);
        }
      )
      .addCase(
        addPieceWorkToEvent.fulfilled,
        (state, { payload }: PayloadAction<ChangePiecework>) => {
          const event = state.events.find((item) => item.id === payload.id);

          if (event) {
            event.pieceworks?.push(payload.piecework);
          }
        }
      )
      .addCase(
        updateTamebasedEvent.fulfilled,
        (state, { payload }: PayloadAction<Event>) => {
          const event = state.events.find((item) => item.id === payload.id);

          if (event) {
            event.timebased = payload.timebased;
          }
        }
      )
      .addCase(
        updatePieceworkEvent.fulfilled,
        (state, { payload }: PayloadAction<ChangePiecework>) => {
          const event = state.events.find((item) => item.id === payload.id);

          if (event) {
            const piecework = event.pieceworks?.find(
              (item) => item.id === payload.piecework.id
            );

            if (piecework) {
              piecework.cost = payload.piecework.cost;
              piecework.count = payload.piecework.count;
              piecework.name = payload.piecework.name;
            }
          }
        }
      )
      .addCase(
        deletePiecework.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ eventId: string; pieceworkId: string }>
        ) => {
          const eventId = payload.eventId;
          const pieceworkId = payload.pieceworkId;
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
        (state, { payload }: PayloadAction<{ eventId: string }>) => {
          const eventId = payload.eventId;

          state.events = state.events.filter((item) => item.id !== eventId);
        }
      );
  },
});

export default eventSlice.reducer;
