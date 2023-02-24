import Input from '../Input';
import Button from '../Button';
import { TYPE_WORK } from '../../entities/Event/constants';
import ButtonGroup from '../ButtonGroup';
import generateId from '../../helpers/generateId';
import { useAddItem } from '../../hooks/useAddItem';
import ModalContainer from '../../containers/ModalContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import { PieceWork } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  pieceWork: PieceWork | null;
  addEvent: (event: any) => void;
  changeEvent: (event: any) => void;
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
  const event = {
    date,
    [TYPE_WORK.PIECE_WORK]: {
      key: pieceWork?.key || generateId(),
      cost: Number(cost.value),
      count: Number(count.value),
      name: name.value,
    },
  };

  const addHandler = () => {
    addEvent(event);
    clear();
    closeModal();
  };

  const saveHandler = () => {
    changeEvent(event);
    clear();
    closeModal();
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
