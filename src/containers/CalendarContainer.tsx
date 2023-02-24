import { connect } from 'react-redux';

import Calendar from '../components/Calendar';
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
