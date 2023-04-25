import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { STATUS } from '../../constants';
import { State, Event, ChangePiecework } from '../../entities/Event';
import {
  fetchEvents,
  createEvent,
  addPieceWorkToEvent,
  updateTamebasedEvent,
  updatePieceworkEvent,
  deletePiecework,
  fetchEventsCostByPeriod,
  deleteTimebased,
} from '../../services/event';

const initialState: State = {
  events: [],
  cost: 0,
  status: null,
};

export const eventSlice = createSlice({
  name: 'eventsOfCalendar',
  initialState,
  reducers: {
    resetState: (state) => {
      state.events = [];
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchEvents.fulfilled,
        (state, { payload }: PayloadAction<Event[]>) => {
          state.events = payload;
          state.status = STATUS.success;
        }
      )
      .addCase(fetchEvents.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(
        fetchEventsCostByPeriod.fulfilled,
        (state, { payload }: PayloadAction<number>) => {
          state.cost = payload;
          state.status = STATUS.success;
        }
      )
      .addCase(fetchEventsCostByPeriod.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchEventsCostByPeriod.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(
        createEvent.fulfilled,
        (state, { payload }: PayloadAction<Event>) => {
          state.events.push(payload);
          state.status = STATUS.success;
        }
      )
      .addCase(createEvent.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(createEvent.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(
        addPieceWorkToEvent.fulfilled,
        (state, { payload }: PayloadAction<ChangePiecework>) => {
          const event = state.events.find((item) => item.id === payload.id);

          if (event) {
            event.pieceworks?.push(payload.piecework);
          }
          state.status = STATUS.success;
        }
      )
      .addCase(addPieceWorkToEvent.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(addPieceWorkToEvent.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(
        updateTamebasedEvent.fulfilled,
        (state, { payload }: PayloadAction<Event>) => {
          const event = state.events.find((item) => item.id === payload.id);

          if (event) {
            event.timebased = payload.timebased;
          }
          state.status = STATUS.success;
        }
      )
      .addCase(updateTamebasedEvent.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(updateTamebasedEvent.rejected, (state) => {
        state.status = STATUS.error;
      })
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
          state.status = STATUS.success;
        }
      )
      .addCase(updatePieceworkEvent.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(updatePieceworkEvent.rejected, (state) => {
        state.status = STATUS.error;
      })
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
          state.status = STATUS.success;
        }
      )
      .addCase(deletePiecework.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(deletePiecework.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(
        deleteTimebased.fulfilled,
        (state, { payload }: PayloadAction<{ eventId: string }>) => {
          const eventId = payload.eventId;

          state.events = state.events.filter((item) => item.id !== eventId);
          state.status = STATUS.success;
        }
      )
      .addCase(deleteTimebased.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(deleteTimebased.rejected, (state) => {
        state.status = STATUS.error;
      });
  },
});

export const { resetState } = eventSlice.actions;

export default eventSlice.reducer;
