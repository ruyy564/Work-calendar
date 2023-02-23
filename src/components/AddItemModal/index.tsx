import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import { Props } from '../../containers/AddItemModalContainer';
import { useAddItem } from '../../hooks/useAddItem';
import ModalContainer from '../../containers/ModalContainer';

import { MODAL_FORMS } from '../../entities/Modal/constants';

import css from './index.module.css';

const AddItemModal = ({ date, data, type, addEvent, closeModal }: Props) => {
  const { cost, count, name } = useAddItem(data);

  const saveHandler = () => {
    console.log('jjghj', data, cost.value, count.value, typeof name.value);
    addEvent({
      date,
      type,
      data: {
        key: data?.key || String(Math.random() * 100) + name.value,
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
