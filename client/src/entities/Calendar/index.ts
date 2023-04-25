import { WEEKENDS_KEYS } from './constants';

export type State = {
  days: CalendarDays;
  selectMonth: number;
  selectYear: number;
  selectDate: string;
  currentDay: string;
};

export type CalendarDate = {
  month: number;
  year: number;
};

export type CalendarDays = {
  lastMonthDays: number[];
  nextMonthDays: number[];
  currentMonthDays: number[];
};

export type Weekends = {
  [key in WEEKENDS_KEYS]: WeekendDays;
};

export type WeekendDays = { [key: string]: number };
