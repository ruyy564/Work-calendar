import { useTimeBasedForm } from '../../hooks/useTimeBasedForm';

import { Props } from '../../containers/FormTimeBasedContainer';
import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import css from './index.module.css';

const FormTimeBased = ({
  closeModal,
  saveEvent,
  addEvent,
  data,
  date,
  type,
  deleteEvent,
}: Props) => {
  const { costInHour, firstTwoHourRatio, mainWorkTime, otherHours, overTime } =
    useTimeBasedForm(data);

  const saveHandler = () => {
    addEvent({
      date,
      type,
      data: {
        costInHour: Number(costInHour.value),
        firstTwoHourRatio: Number(firstTwoHourRatio.value),
        mainWorkTime: Number(mainWorkTime.value),
        otherHours: Number(otherHours.value),
        overTime: Number(overTime.value),
      },
    });
    closeModal();
  };

  const deleteHandler = () => {
    deleteEvent(date);
    closeModal();
  };

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
      {data ? (
        <ButtonGroup>
          <Button onClick={saveHandler} text="Сохранить изменения" />
          <Button onClick={deleteHandler} text="Удалить" />
        </ButtonGroup>
      ) : (
        <Button onClick={saveHandler} text="Добавить" />
      )}
    </div>
  );
};

export default FormTimeBased;
