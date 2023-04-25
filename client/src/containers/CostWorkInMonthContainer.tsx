import { connect } from 'react-redux';

import CostWork from '../components/CostWork';
import { RootState } from '../store';
import {
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { selectEvents, selectStatus } from '../entities/Event/selectors';
import calcCostEventByPeriod from '../entities/Event/helpers';
import { selectUserAuth } from '../entities/User/selectors';
import { formatDate } from '../entities/Calendar/helpers';

const mapState = (state: RootState) => {
  const selectMonth = selectCalendarSelectMonth(state);
  const selectYear = selectCalendarSelectYear(state);
  const events = selectEvents(state);
  const cost = calcCostEventByPeriod(
    events,
    formatDate(selectYear, selectMonth, 1),
    formatDate(selectYear, selectMonth, 31)
  );

  return { cost, status: selectStatus(state), auth: selectUserAuth(state) };
};

const connector = connect(mapState, null);

export default connector(CostWork);
