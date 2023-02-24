import Input from '../Input';
import Button from '../Button';
import { TYPE_WORK } from '../../entities/Event/constants';
import ButtonGroup from '../ButtonGroup';
import generateId from '../../helpers/generateId';
import { useAddItem } from '../../hooks/useAddItem';
import ModalContainer from '../../containers/ModalContainer';
import { MODAL_FORMS } from '../../entities/Modal/constants';

import css from './index.module.css';

type Props = {
  date: string;
  data: any;
  addEvent: (event: any) => void;
  saveEvent: () => void;
  closeModal: () => void;
};

const AddItemModal = ({ date, data, addEvent, closeModal }: Props) => {
  const { cost, count, name } = useAddItem(data);

  const saveHandler = () => {
    addEvent({
      date,
      [TYPE_WORK.PIECE_WORK]: {
        key: data?.key || generateId(),
        cost: Number(cost.value),
        count: Number(count.value),
        name: name.value,
      },
    });
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
        <ButtonGroup>
          <Button onClick={saveHandler} text="Сохранить" />
          <Button onClick={closeModal} text="Отменить" />
        </ButtonGroup>
      </div>
    </ModalContainer>
  );
};

export default AddItemModal;
