import { createSlice } from '@reduxjs/toolkit';

import { State, PieceWork, TimeBased } from '../../entities/Event';
import { TYPE_WORK } from '../../entities/Event/constants';

type ActionPayloadAddEvent = {
  date: string;
  [TYPE_WORK.PIECE_WORK]?: PieceWork;
  [TYPE_WORK.TIME_BASED]?: TimeBased;
};

type ActionPayloadDeleteEvent = {
  date: string;
  key?: string;
};

const initialState: State = {
  events: [
    {
      date: '12-2-2023',
      PieceWork: [{ cost: 500, key: '4531231', name: '45123453', count: 5 }],
    },
  ],
};

export const eventSlice = createSlice({
  name: 'eventsOfCalendar',
  initialState,
  reducers: {
    addEvent: (state, { payload }: { payload: ActionPayloadAddEvent }) => {
      if (payload[TYPE_WORK.TIME_BASED]) {
        state.events.push({
          date: payload.date,
          [TYPE_WORK.TIME_BASED]: payload[TYPE_WORK.TIME_BASED],
        });
      }

      if (payload[TYPE_WORK.PIECE_WORK]) {
        const event = state.events.find((item) => item.date === payload.date);

        if (event) {
          event[TYPE_WORK.PIECE_WORK]?.push(payload[TYPE_WORK.PIECE_WORK]);
        } else {
          state.events.push({
            date: payload.date,
            [TYPE_WORK.PIECE_WORK]: [payload[TYPE_WORK.PIECE_WORK]],
          });
        }
      }
    },
    changeEvent: (state, { payload }: { payload: any }) => {},
    deleteEvent: (
      state,
      { payload }: { payload: ActionPayloadDeleteEvent }
    ) => {
      if (payload.key) {
        const event = state.events.find((item) => item.date === payload.date);

        if (
          event &&
          event[TYPE_WORK.PIECE_WORK] &&
          event[TYPE_WORK.PIECE_WORK].length === 1
        ) {
          state.events = state.events.filter(
            (item) => item.date !== payload.date
          );
        }

        if (event) {
          event[TYPE_WORK.PIECE_WORK] = event[TYPE_WORK.PIECE_WORK]?.filter(
            (item) => item.key !== payload.key
          );
        }
      } else {
        state.events = state.events.filter(
          (item) => item.date !== payload.date
        );
      }
    },
  },
});

export const { deleteEvent, changeEvent, addEvent } = eventSlice.actions;

export default eventSlice.reducer;
