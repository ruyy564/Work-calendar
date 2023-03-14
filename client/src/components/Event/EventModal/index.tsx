import { useState, useEffect, memo } from 'react';

import Input from '../../ui/Input';
import FormPlaceworkContainer from '../../../containers/Event/FormPlaceworkContainer';
import FormTimeBasedContainer from '../../../containers/Event/FormTimeBasedContainer';
import ModalContainer from '../../../containers/ModalContainer';
import { MODAL_FORMS } from '../../../entities/Modal/constants';
import {
  TYPE_WORK,
  RADIO_GROUP_TYPE_WORK,
} from '../../../entities/Event/constants';

import css from './index.module.css';

type Props = {
  date: string;
  type: string;
};

const EventModal = memo(({ date, type }: Props) => {
  const initState = type !== TYPE_WORK.NONE ? type : TYPE_WORK.TIME_BASED;
  const [workType, setWorkType] = useState<string>(initState);

  useEffect(() => {
    setWorkType(initState);
  }, [date, type, initState]);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setWorkType(event.currentTarget.value);
  };

  return (
    <ModalContainer modal={MODAL_FORMS.ADD_EVENT_FORM}>
      <div>Дата: {date}</div>
      <div className={css.groupRadio}>
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
          type="radio"
          text="Повременная"
          checked={workType === TYPE_WORK.TIME_BASED}
          value={TYPE_WORK.TIME_BASED}
          disabled={type === TYPE_WORK.PIECE_WORKS}
        />
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
          type="radio"
          checked={workType === TYPE_WORK.PIECE_WORKS}
          text="Сдельная"
          value={TYPE_WORK.PIECE_WORKS}
          disabled={type === TYPE_WORK.TIME_BASED}
        />
      </div>
      {workType === TYPE_WORK.TIME_BASED ? (
        <FormTimeBasedContainer date={date} />
      ) : (
        <FormPlaceworkContainer date={date} />
      )}
    </ModalContainer>
  );
});

export default EventModal;
