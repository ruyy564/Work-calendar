import Input from '../Input';
import Button from '../Button';
import { TYPE_WORK } from '../../entities/Event/constants';
import ButtonGroup from '../ButtonGroup';
import { useAddItem } from '../../hooks/useAddItem';
import ModalContainer from '../../containers/ModalContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import { PieceWork } from '../../entities/Event';
import { ActionPayloadAddEvent } from '../../store/featurs/eventSlice';

import css from './index.module.css';

type Props = {
  date: string;
  pieceWork: PieceWork | null;
  addEvent: (event: ActionPayloadAddEvent) => void;
  changeEvent: (event: ActionPayloadAddEvent) => void;
  closeModal: () => void;
};

const AddItemModal = ({
  date,
  pieceWork,
  addEvent,
  closeModal,
  changeEvent,
}: Props) => {
  const { cost, count, name, clear } = useAddItem(pieceWork);
  const event: ActionPayloadAddEvent = {
    date,
    [TYPE_WORK.PIECE_WORK]: {
      key: pieceWork?.key,
      cost: Number(cost.value),
      count: Number(count.value),
      name: String(name.value),
    },
  };

  const clickHandler = () => {
    clear();
    closeModal();
  };

  const saveHandler = () => {
    changeEvent(event);
    clickHandler();
  };

  const addHandler = () => {
    addEvent(event);
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
          text="Кол-во"
          value={count.value}
          onChange={count.changeHandler}
        />
        <Input
          type="number"
          text="Стоимость"
          value={cost.value}
          onChange={cost.changeHandler}
        />
        {!pieceWork ? (
          <Button onClick={addHandler} text="Добавить" />
        ) : (
          <ButtonGroup>
            <Button onClick={saveHandler} text="Сохранить изменения" />
            <Button onClick={closeModal} text="Отменить" />
          </ButtonGroup>
        )}
      </div>
    </ModalContainer>
  );
};

export default AddItemModal;
