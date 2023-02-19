import EventModal from '../../components/EventModal';
import CalendarNav from './components/Nav';

import { Props } from '../../containers/CalendarContainer';

import css from './index.module.css';
import CalendarHeader from './components/Header';
import CalendarBody from './components/Body';

const Calendar = ({
  days,
  currentDay,
  selectMonth,
  selectYear,
  nextMonth,
  prevMonth,
  openModal,
}: Props) => {
  return (
    <div className={css.root}>
      <CalendarNav
        currentDay={currentDay}
        selectMonth={selectMonth}
        selectYear={selectYear}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <CalendarHeader />
      <CalendarBody days={days} openModal={openModal} currentDay={currentDay} />
      <EventModal />
    </div>
  );
};

export default Calendar;
