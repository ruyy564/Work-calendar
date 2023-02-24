import { useState } from 'react';

import Button from '../Button';
import { ButtonDelete, ButtonEdit } from '../ButtonIcon';
import AddItemModalContainer from '../../containers/AddItemModalContainer';
import { TYPE_WORK } from '../../entities/Event/constants';
import { PieceWork } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  piecesWork?: PieceWork[];
  addEvent: (event: any) => void;
  saveEvent?: () => void;
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
};
const FormPlacework = ({
  piecesWork,
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
        {!piecesWork ? (
          <div style={{ textAlign: 'center' }}>Здесь ничего нет</div>
        ) : (
          Array.isArray(piecesWork) &&
          piecesWork.map((item, index) => {
            return (
              <div className={css.listItems} key={`${item}-${index}`}>
                <div>{item.name || 'Нет названия'}</div>
                <div>x {item.count}</div>
                <div>{item.cost}р.</div>
                <ButtonEdit onClick={openModal} />
                <ButtonDelete onClick={() => deleteItem(date, item.key)} />
              </div>
            );
          })
        )}
      </div>
      <Button onClick={openModal} text="Добавить изделие" />
      <AddItemModalContainer date={date} data={selectData} />
    </div>
  );
};

export default FormPlacework;