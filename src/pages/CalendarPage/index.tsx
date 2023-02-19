import CalendarContainer from '../../containers/CalendarContainer';
import css from './index.module.css';

const CalendarPage = () => {
  return (
    <div className={css.root}>
      <CalendarContainer />
    </div>
  );
};

export default CalendarPage;
