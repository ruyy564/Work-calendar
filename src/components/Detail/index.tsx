import { memo, useCallback } from 'react';

import { ButtonDelete, ButtonEdit } from '../ButtonIcon';
import { PieceWork } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  item: PieceWork;
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
  setSelectData: (item: PieceWork) => void;
};

const Detail = memo(
  ({ date, item, openModal, deleteItem, setSelectData }: Props) => {
    const clickHandler = useCallback(() => {
      setSelectData(item);
      openModal();
    }, [item, openModal, setSelectData]);

    return (
      <div className={css.listItems}>
        <div>{item.name || 'Нет названия'}</div>
        <div>x {item.count}</div>
        <div>{item.cost}р.</div>
        <ButtonEdit onClick={clickHandler} />
        <ButtonDelete onClick={() => deleteItem(date, item.key)} />
      </div>
    );
  }
);

export default Detail;
