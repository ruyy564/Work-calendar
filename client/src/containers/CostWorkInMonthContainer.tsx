import { connect } from 'react-redux';

import CostWork from '../components/CostWork';
import { RootState } from '../store';
import {
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { selectEvents, selectStatus } from '../entities/Event/selectors';
import calcCostEventByPeriod from '../entities/Event/helpers';

const mapState = (state: RootState) => {
  const selectMonth = selectCalendarSelectMonth(state);
  const selectYear = selectCalendarSelectYear(state);
  const events = selectEvents(state);
  const cost = calcCostEventByPeriod(
    events,
    `1-${selectMonth + 1}-${selectYear}`,
    `31-${selectMonth + 1}-${selectYear}`
  );

  return { status: selectStatus(state), cost };
};

const connector = connect(mapState, null);

export default connector(CostWork);