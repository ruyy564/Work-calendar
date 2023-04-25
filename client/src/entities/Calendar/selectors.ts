import type { RootState } from '../../store';
import { CalendarDays } from '.';
import { formatDate } from './helpers';

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

export const selectCalendarSelectFirstAndLastDaysFullDate = (
  state: RootState
): { firstDay: string; lastDay: string } => {
  const { currentMonthDays } = selectCalendarDays(state);
  const selectYear = selectCalendarSelectYear(state);
  const selectMonth = selectCalendarSelectMonth(state);

  return {
    firstDay: formatDate(selectYear, selectMonth, currentMonthDays[0]),
    lastDay: formatDate(
      selectYear,
      selectMonth,
      currentMonthDays[currentMonthDays.length - 1]
    ),
  };
};
