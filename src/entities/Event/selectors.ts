import type { RootState } from '../../store';
import { getCurrentMonth } from '../../entities/Calendar/helpers';

export const selectCalendarCurrentDay = (state: RootState): string =>
  state.calendar.currentDay;
export const selectCalendarSelectMonth = (state: RootState): string =>
  getCurrentMonth(state.calendar.selectMonth);
export const selectCalendarSelectYear = (state: RootState): number =>
  state.calendar.selectYear;
