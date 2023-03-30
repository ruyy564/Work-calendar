import Input from '../../ui/Input';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import { useAddItem } from '../../../hooks/useAddItem';
import ModalContainer from '../../../containers/ModalContainer';
import { MODAL_FORMS } from '../../../entities/Modal/constants';
import {
  Piecework,
  CreateEvent,
  EventWrapper,
  PieceworkWrapper,
} from '../../../entities/Event';
import { getPieceworkId } from '../../../entities/Event/getters';

import css from './index.module.css';

type Props = {
  date: string;
  piecework: Piecework | null;
  EventId?: string;
  createEvent: (event: CreateEvent) => void;
  addEvent: (event: CreateEvent) => void;
  changeEvent: (event: CreateEvent) => void;
  closeModal: () => void;
};

const AddItemModal = ({
  date,
  piecework,
  EventId,
  createEvent,
  addEvent,
  closeModal,
  changeEvent,
}: Props) => {
  const { cost, count, name, clear } = useAddItem(piecework);
  const newPiecework = new PieceworkWrapper(
    String(name.value),
    Number(count.value),
    Number(cost.value),
    EventId,
    piecework ? getPieceworkId(piecework) : undefined
  );
  const event = new EventWrapper(date);
  event.setPiework(newPiecework);

  const clickHandler = () => {
    clear();
    closeModal();
  };

  const changeHandler = () => {
    changeEvent(event);
    clickHandler();
  };

  const addHandler = () => {
    if (EventId) {
      addEvent(event);
    } else {
      createEvent(event);
    }
    clickHandler();
  };

  return (
    <ModalContainer modal={MODAL_FORMS.ADD_ITEM_FORM}>
      <div className={css.addItem}>
        <Input
          type="text"
          text="Название изделия"
          value={name.value}
          onChange={name.changeHandler}
        />
        <Input
          type="number"
          text="Кол-во (шт.)"
          value={count.value}
          onChange={count.changeHandler}
        />
        <Input
          type="number"
          text="Стоимость (руб.)"
          value={cost.value}
          onChange={cost.changeHandler}
        />
        {!piecework ? (
          <Button onClick={addHandler} text="Добавить" />
        ) : (
          <ButtonGroup>
            <Button onClick={changeHandler} text="Сохранить" />
            <Button onClick={closeModal} text="Отменить" />
          </ButtonGroup>
        )}
      </div>
    </ModalContainer>
  );
};

export default AddItemModal;
