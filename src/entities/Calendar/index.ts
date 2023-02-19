export type State = {
  days: CalendarDays;
  selectMonth: number;
  selectYear: number;
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
