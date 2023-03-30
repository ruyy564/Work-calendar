import { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { InputRadio } from '../../ui/Input';
import FormPlaceworkContainer from '../../../containers/Event/FormPlaceworkContainer';
import FormTimeBasedContainer from '../../../containers/Event/FormTimeBasedContainer';
import ModalContainer from '../../../containers/ModalContainer';
import { MODAL_FORMS } from '../../../entities/Modal/constants';
import {
  TYPE_WORK,
  RADIO_GROUP_TYPE_WORK,
} from '../../../entities/Event/constants';
import { ROUTE_TO_LOGIN } from '../../../routes/constants';

import css from './index.module.css';

type Props = {
  auth: boolean;
  date: string;
  type: string;
  resetStateModal: () => void;
};

const EventModal = memo(({ auth, date, type, resetStateModal }: Props) => {
  const initState = type !== TYPE_WORK.NONE ? type : TYPE_WORK.TIME_BASED;
  const [workType, setWorkType] = useState<string>(initState);

  useEffect(() => {
    setWorkType(initState);
  }, [date, type, initState]);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setWorkType(event.currentTarget.value);
  };

  if (!auth) {
    return (
      <ModalContainer modal={MODAL_FORMS.ADD_EVENT_FORM}>
        <div>Уведомление:</div>
        <div className={css.alert}>
          Для работы с событиями необходимо авторизоваться
        </div>
        <NavLink to={ROUTE_TO_LOGIN} onClick={resetStateModal}>
          Авторизоваться
        </NavLink>
      </ModalContainer>
    );
  }

  return (
    <ModalContainer modal={MODAL_FORMS.ADD_EVENT_FORM}>
      <div>Дата: {date}</div>
      <div className={css.groupRadio}>
        <InputRadio
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
          text="Повременная"
          checked={workType === TYPE_WORK.TIME_BASED}
          value={TYPE_WORK.TIME_BASED}
          disabled={type === TYPE_WORK.PIECE_WORKS}
        />
        <InputRadio
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
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
