import { MONTHS, DAYS_OF_WEEK } from './constants';
import { CalendarDays, CalendarDate } from '.';

export const getCurrentMonth = (month: number): string => {
  return MONTHS[month - 1];
};

export const getCurrentDayOfWeek = (dayOfWeek: number): string => {
  return DAYS_OF_WEEK[dayOfWeek];
};

export const getNextMonth = (month: number, year: number): CalendarDate => {
  if (month === 12) {
    month = 1;
    year = year + 1;
  } else {
    month = month + 1;
  }

  return { month, year };
};

export const getPrevMonth = (month: number, year: number): CalendarDate => {
  if (month === 1) {
    month = 12;
    year = year - 1;
  } else {
    month = month - 1;
  }

  return { month, year };
};

export const calcDaysOfMonth = (
  monthFormat: number,
  year: number
): CalendarDays => {
  const month = monthFormat - 1;
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

export const formatDate = (year: number, month: number, day: number) => {
  let mm = month < 10 ? '0' + month : month;
  let dd = day < 10 ? '0' + day : day;

  return `${year}-${mm}-${dd}`;
};

export const initState = () => {
  const date = new Date();
  const selectMonth = date.getMonth() + 1;
  const selectYear = date.getFullYear();
  const SelectDay = date.getDate();
  const currentDay = formatDate(selectYear, selectMonth, SelectDay);
  const days = calcDaysOfMonth(selectMonth, selectYear);

  return { selectMonth, selectYear, currentDay, days, selectDate: currentDay };
};
