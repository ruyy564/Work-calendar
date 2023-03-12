import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { useAddItem } from '../../hooks/useAddItem';
import ModalContainer from '../../containers/ModalContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import { Piecework, CreateEvent } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  piecework: Piecework | null;
  EventId?: string;
  hasEvent: boolean;
  createEvent: any;
  addEvent: any;
  changeEvent: any;
  closeModal: () => void;
};

const AddItemModal = ({
  date,
  piecework,
  hasEvent,
  EventId,
  createEvent,
  addEvent,
  closeModal,
  changeEvent,
}: Props) => {
  const { cost, count, name, clear } = useAddItem(piecework);
  console.log('EventId', EventId);
  const event = {
    date,
    piecework: {
      id: piecework?.id || '',
      cost: Number(cost.value),
      count: Number(count.value),
      name: String(name.value),
      EventId: piecework?.EventId || EventId,
    },
  };

  const clickHandler = () => {
    clear();
    closeModal();
  };

  const changeHandler = () => {
    changeEvent(event);
    clickHandler();
  };

  const addHandler = () => {
    const event = {
      date,
      piecework: {
        cost: Number(cost.value),
        count: Number(count.value),
        name: String(name.value),
        EventId: piecework?.EventId || EventId,
      },
    };

    if (hasEvent) {
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
            <Button onClick={changeHandler} text="Сохранить изменения" />
            <Button onClick={closeModal} text="Отменить" />
          </ButtonGroup>
        )}
      </div>
    </ModalContainer>
  );
};

export default AddItemModal;
