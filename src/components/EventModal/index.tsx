import { useState, useEffect } from 'react';

import Input from '../Input';
import FormPlaceworkContainer from '../../containers/FormPlaceworkContainer';
import FormTimeBasedContainer from '../../containers/FormTimeBasedContainer';
import ModalContainer from '../../containers/ModalContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import {
  TYPE_WORK,
  RADIO_GROUP_TYPE_WORK,
} from '../../entities/Event/constants';
import { Props } from '../../containers/EventModalContainer';

import css from './index.module.css';

const EventModal = ({ date, type }: Props) => {
  const initState = type ? type : TYPE_WORK.TIME_BASED;
  const [workType, setWorkType] = useState(initState);

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
          disabled={type && type !== TYPE_WORK.TIME_BASED}
        />
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
          type="radio"
          checked={workType === TYPE_WORK.PIECE_WORK}
          text="Сдельная"
          value={TYPE_WORK.PIECE_WORK}
          disabled={type && type !== TYPE_WORK.PIECE_WORK}
        />
      </div>
      {workType === TYPE_WORK.TIME_BASED ? (
        <FormTimeBasedContainer date={date} />
      ) : (
        <FormPlaceworkContainer date={date} />
      )}
    </ModalContainer>
  );
};

export default EventModal;
