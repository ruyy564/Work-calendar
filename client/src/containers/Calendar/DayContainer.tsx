import { connect } from 'react-redux';

import Day from '../../components/Calendar/components/Day';
import { RootState } from '../../store';
import {
  selectCalendarCurrentDay,
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../../entities/Calendar/selectors';
import { setSelectDate } from '../../store/featurs/calendarSlice';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import { openModal } from '../../store/featurs/modalSlice';

const mapState = (state: RootState) => ({
  currentDay: selectCalendarCurrentDay(state),
  currentMonth: selectCalendarSelectMonth(state),
  currentYear: selectCalendarSelectYear(state),
});

const mapDispatch = {
  openModal: () => openModal(MODAL_FORMS.ADD_EVENT_FORM),
  setSelectDate: (date: string) => setSelectDate(date),
};

const connector = connect(mapState, mapDispatch);

export default connector(Day);
