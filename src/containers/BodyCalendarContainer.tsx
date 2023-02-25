import { connect } from 'react-redux';

import BodyCalendar from '../components/BodyCalendar';
import { RootState } from '../store';
import {
  selectCalendarCurrentDay,
  selectCalendarDays,
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { openModal } from '../store/featurs/modalSlice';

const mapState = (state: RootState) => ({
  days: selectCalendarDays(state),
  currentDay: selectCalendarCurrentDay(state),
  currentMonth: selectCalendarSelectMonth(state),
  currentYear: selectCalendarSelectYear(state),
});

const mapDispatch = {
  openModal: () => openModal(MODAL_FORMS.ADD_EVENT_FORM),
};

const connector = connect(mapState, mapDispatch);

export default connector(BodyCalendar);
