import { connect } from 'react-redux';

import CostWork from '../components/CostWork';
import { RootState } from '../store';
import {
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { selectEvents } from '../entities/Event/selectors';
import calcCostEventByPeriod from '../helpers/calcCostEventByPeriod';

const mapState = (state: RootState) => {
  const selectMonth = selectCalendarSelectMonth(state);
  const selectYear = selectCalendarSelectYear(state);
  const events = selectEvents(state);
  const cost = calcCostEventByPeriod(
    events,
    `1-${selectMonth + 1}-${selectYear}`,
    `31-${selectMonth + 1}-${selectYear}`
  );

  return { cost };
};

const connector = connect(mapState, null);

export default connector(CostWork);
