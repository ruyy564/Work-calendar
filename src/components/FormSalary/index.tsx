import { useEventForm } from '../../hooks/useEventForm';

import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import css from './index.module.css';

const FormSalary = () => {
  const { costHour, mainTime, secondTime, firstRatio, secondRatio, clearForm } =
    useEventForm();
  return (
    <div className={css.root}>
      <div className={css.body}>
        <Input
          type="number"
          min={0}
          onChange={costHour.changeHandler}
          value={costHour.value}
          text="Стоимость часа"
        />
        <Input
          type="number"
          min={0}
          max={24}
          onChange={mainTime.changeHandler}
          value={mainTime.value}
          text="Основное время"
        />
        <Input
          type="number"
          min={0}
          max={24}
          value={secondTime.value}
          onChange={secondTime.changeHandler}
          text="Сверхурочное время"
        />
        {Number(secondTime.value) > 0 && (
          <div>
            <div className={css.title}>Коэффициент:</div>
            <Input
              type="number"
              min={0}
              max={24}
              value={firstRatio.value}
              onChange={firstRatio.changeHandler}
              text="Первые 2 часа"
            />
            {Number(secondTime.value) > 2 && (
              <Input
                type="number"
                min={0}
                max={24}
                onChange={secondRatio.changeHandler}
                value={secondRatio.value}
                text="Последующие 2 часа"
              />
            )}
          </div>
        )}
      </div>
      <ButtonGroup>
        <Button onClick={() => {}} text="Сохранить" />
        <Button onClick={() => {}} text="Отменить" />
      </ButtonGroup>
    </div>
  );
};

export default FormSalary;
