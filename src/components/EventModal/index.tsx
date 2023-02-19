import { useInput } from '../../hooks/useInput';

import Input from '../Input';
import FormSalary from '../FormSalary';
import FormPlaceWork from '../FormPlacework';

import ModalContainer from '../../containers/ModalContainer';

import { MODAL_FORMS } from '../../entities/Modal/constants';
import {
  TYPE_WORK,
  RADIO_GROUP_TYPE_WORK,
} from '../../entities/Event/constants';

import css from './index.module.css';

type Props = {
  save?: () => void;
};

const EventModal = ({ save }: Props) => {
  const typePaid = useInput(TYPE_WORK.TIME_BASED);

  return (
    <ModalContainer modal={MODAL_FORMS.ADD_EVENT_FORM}>
      <div>Дата: {'2023-02-20'}</div>
      <div className={css.groupRadio}>
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={typePaid.changeHandler}
          type="radio"
          text="Повременная"
          checked={typePaid.value === TYPE_WORK.TIME_BASED}
          value={TYPE_WORK.TIME_BASED}
        />
        <Input
          name={RADIO_GROUP_TYPE_WORK}
          onChange={typePaid.changeHandler}
          type="radio"
          checked={typePaid.value === TYPE_WORK.PIECE_WORK}
          text="Сдельная"
          value={TYPE_WORK.PIECE_WORK}
        />
      </div>

      {typePaid.value === TYPE_WORK.TIME_BASED ? (
        <FormSalary />
      ) : (
        <FormPlaceWork />
      )}
    </ModalContainer>
  );
};

export default EventModal;
