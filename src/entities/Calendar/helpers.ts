import { MONTHS, DAYS_OF_WEEK } from './constants';
import { CalendarDays, CalendarDate } from '.';

export const getCurrentMonth = (month: number): string => {
  return MONTHS[month];
};

export const getCurrentDayOfWeek = (dayOfWeek: number): string => {
  return DAYS_OF_WEEK[dayOfWeek];
};

export const getNextMonth = (month: number, year: number): CalendarDate => {
  if (month === 11) {
    month = 0;
    year = year + 1;
  } else {
    month = month + 1;
  }

  return { month, year };
};

export const getPrevMonth = (month: number, year: number): CalendarDate => {
  if (month === 0) {
    month = 11;
    year = year - 1;
  } else {
    month = month - 1;
  }

  return { month, year };
};

export const calcDaysOfMonth = (month: number, year: number): CalendarDays => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDay.getDay();
  const lastDayOfWeek = lastDay.getDay();
  const lastMonthDays = [];
  const nextMonthDays = [];
  const currentMonthDays = [];

  if (firstDayOfWeek !== 1) {
    let count = firstDayOfWeek !== 0 ? firstDayOfWeek - 2 : 5;

    while (count >= 0) {
      lastMonthDays.push(new Date(year, month, -count).getDate());
      count--;
    }
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    currentMonthDays.push(new Date(year, month, i).getDate());
  }

  if (lastDayOfWeek !== 0) {
    let count = lastDayOfWeek !== 6 ? 7 - lastDayOfWeek : 1;

    for (let i = 1; i <= count; i++) {
      nextMonthDays.push(new Date(year, month + 1, i).getDate());
    }
  }

  return { lastMonthDays, currentMonthDays, nextMonthDays };
};
