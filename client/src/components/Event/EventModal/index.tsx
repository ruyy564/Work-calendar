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
  const initState = type !== 'none' ? type : 'timebased';
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
          checked={workType === 'timebased'}
          value={'timebased'}
          disabled={type === 'pieceworks'}
        />
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={changeHandler}
          type="radio"
          checked={workType === 'pieceworks'}
          text="Сдельная"
          value={'pieceworks'}
          disabled={type === 'timebased'}
        />
      </div>
      {workType === 'timebased' ? (
        <FormTimeBasedContainer date={date} />
      ) : (
        <FormPlaceworkContainer date={date} />
      )}
    </ModalContainer>
  );
});

export default EventModal;
