import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import AddItemModal from '../AddItemModal';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

import css from './index.module.css';

const FormPlacework = () => {
  const list = [
    { name: 'S-3234', count: 54, cost: 25135 },
    { name: 'S-3234', count: 54, cost: 25135 },
  ];
  return (
    <div className={css.root}>
      <div className={css.list}>
        {!list.length ? (
          <div style={{ textAlign: 'center' }}>Пусто...</div>
        ) : (
          list.map((item) => {
            return (
              <div className={css.listItems}>
                <div>{item.name}</div>
                <div>x {item.count}</div>
                <div>{item.cost}р.</div>
                <ButtonIcon onClick={() => {}}>
                  <AiFillEdit />
                </ButtonIcon>
                <ButtonIcon onClick={() => {}}>
                  <AiFillDelete />
                </ButtonIcon>
              </div>
            );
          })
        )}
      </div>
      <Button onClick={() => {}} text="Добавить изделие" />
      <AddItemModal />
    </div>
  );
};

export default FormPlacework;
