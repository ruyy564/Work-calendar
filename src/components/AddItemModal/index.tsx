import { useInput } from '../../hooks/useInput';

import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import ModalContainer from '../../containers/ModalContainer';

import { MODAL_FORMS } from '../../entities/Modal/constants';

import css from './index.module.css';

type Props = {
  save?: () => void;
};

const AddItemModal = ({ save }: Props) => {
  return (
    <ModalContainer modal={MODAL_FORMS.ADD_ITEM_FORM}>
      <div className={css.addItem}>
        <Input type="text" text="Название изделия" />
        <Input type="number" min={0} text="Кол-во" />
        <Input type="number" min={0} text="Стоимость" />
        <ButtonGroup>
          <Button onClick={() => {}} text="Сохранить" />
          <Button onClick={() => {}} text="Отменить" />
        </ButtonGroup>
      </div>
    </ModalContainer>
  );
};

export default AddItemModal;
