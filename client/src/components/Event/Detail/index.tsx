import { memo, useCallback } from 'react';

import { ButtonDelete, ButtonEdit } from '../../ui/ButtonIcon';
import { Piecework } from '../../../entities/Event';
import {
  getPieceworkCost,
  getPieceworkCount,
  getPieceworkEventId,
  getPieceworkName,
  getPieceworkId,
} from '../../../entities/Event/getters';

import css from './index.module.css';

type Props = {
  item: Piecework;
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
  setSelectData: (item: Piecework) => void;
};

const Detail = memo(({ item, openModal, deleteItem, setSelectData }: Props) => {
  const clickHandler = useCallback(() => {
    setSelectData(item);
    openModal();
  }, [item, openModal, setSelectData]);

  return (
    <div className={css.listItems}>
      <div>{getPieceworkName(item) || 'Нет названия'}</div>
      <div>
        <div className={css.count}>x {getPieceworkCount(item)}</div>
        <div className={css.count}>{getPieceworkCost(item)}р.</div>
      </div>

      <ButtonEdit onClick={clickHandler} />
      <ButtonDelete
        onClick={() =>
          deleteItem(getPieceworkEventId(item), getPieceworkId(item))
        }
      />
    </div>
  );
});

export default Detail;
