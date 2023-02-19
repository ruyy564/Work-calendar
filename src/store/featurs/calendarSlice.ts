import { createSlice } from '@reduxjs/toolkit';

import { State } from '../../entities/Calendar';
import {
  calcDaysOfMonth,
  getNextMonth,
  getPrevMonth,
} from '../../entities/Calendar/helpers';

const date = new Date();
const selectMonth = date.getMonth();
const selectYear = date.getFullYear();
const selectDay = date.getDate();
const currentDay = `${selectDay}-${selectMonth}-${selectYear}`;
const days = calcDaysOfMonth(selectMonth, selectYear);

const initialState: State = {
  selectMonth,
  selectYear,
  currentDay,
  days,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextMonth: (state) => {
      const { month, year } = getNextMonth(state.selectMonth, state.selectYear);

      state.selectMonth = month;
      state.selectYear = year;
      state.days = calcDaysOfMonth(month, year);
    },
    prevMonth: (state) => {
      const { month, year } = getPrevMonth(state.selectMonth, state.selectYear);

      state.selectMonth = month;
      state.selectYear = year;
      state.days = calcDaysOfMonth(month, year);
    },
  },
});

export const { nextMonth, prevMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
