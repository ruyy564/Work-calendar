import { createSlice } from '@reduxjs/toolkit';

import { State, TimeBased, PieceWork, Event } from '../../entities/Event';
import { TYPE_WORK } from '../../entities/Event/constants';

type w = {
  type: TYPE_WORK.TIME_BASED;
  data: TimeBased;
};

type h = {
  type: TYPE_WORK.PIECE_WORK;
  data: PieceWork[];
};

type ActionType = {
  payload: {
    date: string;
  } & (w | h);
};

const initialState: State = {
  events: [
    {
      date: '15-2-2023',
      type: TYPE_WORK.PIECE_WORK,
      data: [
        {
          key: 'gfdgsfg',
          name: 'Gthf-534',
          count: 8,
          cost: 500,
        },
        {
          key: 'fdgdfg',
          name: 'рурра-534',
          count: 81,
          cost: 3000,
        },
      ],
    },
    {
      date: '14-2-2023',
      type: TYPE_WORK.TIME_BASED,
      data: {
        costInHour: 100,
        mainWorkTime: 10,
        overTime: 10,
        otherHours: 2,
        firstTwoHourRatio: 2,
      },
    },
  ],
};

export const eventSlice = createSlice({
  name: 'eventsOfCalendar',
  initialState,
  reducers: {
    addEvent: (state, { payload }: { payload: any }) => {
      if (payload.type === TYPE_WORK.TIME_BASED) {
        state.events.push(payload);
      }

      if (payload.type === TYPE_WORK.PIECE_WORK) {
        const event = state.events.find((item) => item.date === payload.date);

        if (event && event.type === TYPE_WORK.PIECE_WORK) {
          event.data.push(payload.data);
        } else {
          console.log('pl', payload.data);
          state.events.push({
            date: payload.date,
            type: TYPE_WORK.PIECE_WORK,
            data: [payload.data],
          });
        }
      }
    },
    changeEvent: (state, { payload }: { payload: any }) => {},
    deleteEvent: (state, { payload }: { payload: any }) => {
      if (payload.type === TYPE_WORK.TIME_BASED) {
        state.events = state.events.filter(
          (item) => item.date === payload.date
        );
      }

      if (payload.type === TYPE_WORK.PIECE_WORK) {
        if (payload.key) {
          state.events = state.events.map((item) => {
            if (
              item.date === payload.date &&
              item.type === TYPE_WORK.PIECE_WORK
            ) {
              return {
                ...item,
                data: item.data.filter((item) => item.key === payload.key),
              };
            }
            return item;
          });
        }
      } else {
        state.events = state.events.filter(
          (item) => item.date === payload.date
        );
      }
    },
  },
});

export const { deleteEvent, changeEvent, addEvent } = eventSlice.actions;

export default eventSlice.reducer;
