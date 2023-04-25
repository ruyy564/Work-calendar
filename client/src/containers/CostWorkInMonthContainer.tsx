import { connect } from 'react-redux';

import CostWork from '../components/CostWork';
import { RootState } from '../store';
import {
  selectStatus,
  selectEventsCost,
  selectEvents,
} from '../entities/Event/selectors';
import { selectUserAuth } from '../entities/User/selectors';
import { fetchEventsCostByPeriod } from '../services/event';
import { selectCalendarSelectFirstAndLastDaysFullDate } from '../entities/Calendar/selectors';

const mapState = (state: RootState) => ({
  events: selectEvents(state),
  cost: selectEventsCost(state),
  status: selectStatus(state),
  firstAndLastDayFullDate: selectCalendarSelectFirstAndLastDaysFullDate(state),
  auth: selectUserAuth(state),
});

const mapDispatch = {
  fetchEventsCostByPeriod: (start: string, end: string) =>
    fetchEventsCostByPeriod({ start, end }),
};

const connector = connect(mapState, mapDispatch);

export default connector(CostWork);
