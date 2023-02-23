import { useState } from 'react';
import AddItemModalContainer from '../../containers/AddItemModalContainer';
import Button from '../Button';
import { ButtonDelete, ButtonEdit } from '../ButtonIcon';
import { Props } from '../../containers/FormPlaceworkContainer';
import css from './index.module.css';

const FormPlacework = ({
  data,
  type,
  date,
  addEvent,
  deleteItem,
  saveEvent,
  openModal,
}: Props) => {
  const [selectData, setSelectData] = useState(null);
  return (
    <div className={css.root}>
      <div className={css.list}>
        {!data ? (
          <div style={{ textAlign: 'center' }}>Здесь ничего нет</div>
        ) : (
          Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <div className={css.listItems} key={`${item}-${index}`}>
                <div>{item.name}</div>
                <div>x {item.count}</div>
                <div>{item.cost}р.</div>
                <ButtonEdit onClick={openModal} />
                <ButtonDelete onClick={() => {}} />
              </div>
            );
          })
        )}
      </div>
      <Button onClick={openModal} text="Добавить изделие" />
      <AddItemModalContainer date={date} type={type} data={selectData} />
    </div>
  );
};

export default FormPlacework;
