import type { RootState } from '../../store';
import { CalendarDays } from '.';

export const selectCalendarDays = (state: RootState): CalendarDays =>
  state.calendar.days;
export const selectCalendarCurrentDay = (state: RootState): string =>
  state.calendar.currentDay;
export const selectCalendarSelectMonth = (state: RootState): number =>
  state.calendar.selectMonth;
export const selectCalendarSelectYear = (state: RootState): number =>
  state.calendar.selectYear;
export const selectCalendarSelectDate = (state: RootState): string =>
  state.calendar.selectDate;
