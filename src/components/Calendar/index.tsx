import { useState } from 'react';

import EventModalContainer from '../../containers/EventModalContainer';
import CalendarNav from './components/Nav';
import CalendarHeader from './components/Header';
import CalendarBody from './components/Body';
import { Props } from '../../containers/CalendarContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';

import css from './index.module.css';

const Calendar = ({
  days,
  currentDay,
  selectMonth,
  selectYear,
  nextMonth,
  prevMonth,
  openModal,
}: Props) => {
  const [selectDate, setSelectDate] = useState('');

  const clickHandler = (date: string) => {
    setSelectDate(date);
    openModal(MODAL_FORMS.ADD_EVENT_FORM);
  };

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
      <CalendarBody
        days={days}
        openModal={clickHandler}
        currentMonth={selectMonth}
        currentYears={selectYear}
      />
      <EventModalContainer date={selectDate} />
    </div>
  );
};

export default Calendar;
