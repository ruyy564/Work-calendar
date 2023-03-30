import { useCallback } from 'react';

import { useTimeBasedForm } from '../../../hooks/useTimeBasedForm';
import { Timebased, CreateEvent } from '../../../entities/Event';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import { EventWrapper, TimeBasedWrapper } from '../../../entities/Event';
import { getTimebasedEventId } from '../../../entities/Event/getters';

import css from './index.module.css';

type Props = {
  date: string;
  timebased?: Timebased;
  createEvent: (event: CreateEvent) => void;
  deleteEvent: (eventId: string) => void;
  changeEvent: (event: CreateEvent) => void;
  closeModal: () => void;
};

const FormTimeBased = ({
  closeModal,
  changeEvent,
  createEvent,
  timebased,
  date,
  deleteEvent,
}: Props) => {
  const {
    costInHour,
    firstTwoHourRatio,
    mainWorkTime,
    otherHoursRatio,
    overTime,
  } = useTimeBasedForm(timebased);
  const newTimebased = new TimeBasedWrapper(
    Number(costInHour.value),
    Number(mainWorkTime.value),
    Number(overTime.value),
    Number(firstTwoHourRatio.value),
    Number(otherHoursRatio.value),
    timebased ? getTimebasedEventId(timebased) : undefined
  );
  const event = new EventWrapper(date);
  event.setTimebased(newTimebased);

  const createHandler = () => {
    createEvent(event);
    closeModal();
  };

  const changeHandler = () => {
    changeEvent(event);
    closeModal();
  };

  const deleteHandler = useCallback(() => {
    if (timebased && getTimebasedEventId(timebased)) {
      deleteEvent(getTimebasedEventId(timebased));
      closeModal();
    }
  }, [closeModal, deleteEvent, timebased]);

  return (
    <div className={css.root}>
      <div className={css.body}>
        <Input
          type="number"
          onChange={costInHour.changeHandler}
          value={costInHour.value}
          text="Стоимость часа (руб.)"
        />
        <Input
          type="number"
          onChange={mainWorkTime.changeHandler}
          value={mainWorkTime.value}
          text="Основное время (ч.)"
        />
        <Input
          type="number"
          value={overTime.value}
          onChange={overTime.changeHandler}
          text="Сверхурочное время (ч.)"
        />
        {Number(overTime.value) > 0 && (
          <div>
            <div className={css.title}>Коэффициент:</div>
            <Input
              type="number"
              value={firstTwoHourRatio.value}
              onChange={firstTwoHourRatio.changeHandler}
              step={0.5}
              text="Первые 2 часа"
            />
            {Number(overTime.value) > 2 && (
              <Input
                type="number"
                onChange={otherHoursRatio.changeHandler}
                value={otherHoursRatio.value}
                step={0.5}
                text="Последующие 2 часа"
              />
            )}
          </div>
        )}
      </div>
      {timebased ? (
        <ButtonGroup>
          <Button onClick={changeHandler} text="Сохранить" />
          <Button onClick={deleteHandler} text="Удалить" />
        </ButtonGroup>
      ) : (
        <Button onClick={createHandler} text="Добавить" />
      )}
    </div>
  );
};

export default FormTimeBased;
