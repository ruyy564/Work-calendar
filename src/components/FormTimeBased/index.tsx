import { useCallback } from 'react';

import { useTimeBasedForm } from '../../hooks/useTimeBasedForm';
import { TYPE_WORK } from '../../entities/Event/constants';
import { TimeBased } from '../../entities/Event';
import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { ActionPayloadAddEvent } from '../../store/featurs/eventSlice';

import css from './index.module.css';

type Props = {
  date: string;
  timeBased?: TimeBased;
  addEvent: (event: ActionPayloadAddEvent) => void;
  deleteEvent: (date: string) => void;
  changeEvent: (event: ActionPayloadAddEvent) => void;
  closeModal: () => void;
};

const FormTimeBased = ({
  closeModal,
  changeEvent,
  addEvent,
  timeBased,
  date,
  deleteEvent,
}: Props) => {
  const { costInHour, firstTwoHourRatio, mainWorkTime, otherHours, overTime } =
    useTimeBasedForm(timeBased);
  const event = {
    date,
    [TYPE_WORK.TIME_BASED]: {
      costInHour: Number(costInHour.value),
      firstTwoHourRatio: Number(firstTwoHourRatio.value),
      mainWorkTime: Number(mainWorkTime.value),
      otherHours: Number(otherHours.value),
      overTime: Number(overTime.value),
    },
  };

  const addHandler = () => {
    addEvent(event);
    closeModal();
  };

  const saveHandler = () => {
    changeEvent(event);
    closeModal();
  };

  const deleteHandler = useCallback(() => {
    deleteEvent(date);
    closeModal();
  }, [closeModal, date, deleteEvent]);

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
                onChange={otherHours.changeHandler}
                value={otherHours.value}
                step={0.5}
                text="Последующие 2 часа"
              />
            )}
          </div>
        )}
      </div>
      {timeBased ? (
        <ButtonGroup>
          <Button onClick={saveHandler} text="Сохранить изменения" />
          <Button onClick={deleteHandler} text="Удалить" />
        </ButtonGroup>
      ) : (
        <Button onClick={addHandler} text="Добавить" />
      )}
    </div>
  );
};

export default FormTimeBased;
