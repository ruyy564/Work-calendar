import { memo, useCallback } from 'react';

import { ButtonDelete, ButtonEdit } from '../ui/ButtonIcon';
import { Piecework } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  item: Piecework;
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
  setSelectData: (item: Piecework) => void;
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
        <ButtonDelete onClick={() => deleteItem(item.EventId, item.id)} />
      </div>
    );
  }
);

export default Detail;
