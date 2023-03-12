import { useCallback } from 'react';

import { useTimeBasedForm } from '../../hooks/useTimeBasedForm';
import { Timebased, CreateEvent } from '../../entities/Event';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';

import css from './index.module.css';

type Props = {
  date: string;
  timebased?: Timebased;
  createEvent: (event: CreateEvent) => void;
  deleteEvent: any;
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
  const event = {
    date,
    timebased: {
      EventId: timebased?.EventId || '',
      costInHour: Number(costInHour.value),
      firstTwoHourRatio: Number(firstTwoHourRatio.value),
      mainWorkTime: Number(mainWorkTime.value),
      otherHoursRatio: Number(otherHoursRatio.value),
      overTime: Number(overTime.value),
    },
  };

  const createHandler = () => {
    createEvent(event);
    closeModal();
  };

  const changeHandler = () => {
    changeEvent(event);
    closeModal();
  };

  const deleteHandler = useCallback(() => {
    deleteEvent(timebased?.EventId);
    closeModal();
  }, [closeModal, deleteEvent, timebased?.EventId]);

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
          <Button onClick={changeHandler} text="Сохранить изменения" />
          <Button onClick={deleteHandler} text="Удалить" />
        </ButtonGroup>
      ) : (
        <Button onClick={createHandler} text="Добавить" />
      )}
    </div>
  );
};

export default FormTimeBased;
