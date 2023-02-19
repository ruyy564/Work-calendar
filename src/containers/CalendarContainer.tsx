import { connect } from 'react-redux';

import Calendar from '../components/Calendar';
import { CalendarDays } from '../entities/Calendar';
import { RootState } from '../store';
import {
  selectCalendarCurrentDay,
  selectCalendarDays,
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { Modal } from '../entities/Modal';
import { nextMonth, prevMonth } from '../store/featurs/calendarSlice';
import { openModal } from '../store/featurs/modalSlice';

export type Props = {
  days: CalendarDays;
  currentDay: string;
  selectMonth: string;
  selectYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
  openModal: (modal: Modal) => void;
};

const mapState = (state: RootState) => ({
  days: selectCalendarDays(state),
  currentDay: selectCalendarCurrentDay(state),
  selectMonth: selectCalendarSelectMonth(state),
  selectYear: selectCalendarSelectYear(state),
});

const mapDispatch = {
  nextMonth: () => nextMonth(),
  prevMonth: () => prevMonth(),
  openModal: (modal: Modal) => openModal(modal),
};

const connector = connect(mapState, mapDispatch);

export default connector(Calendar);
