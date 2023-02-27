import { useState, useCallback } from 'react';

import Detail from '../Detail';
import Button from '../Button';
import AddItemModalContainer from '../../containers/AddItemModalContainer';
import { PieceWork } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  piecesWork?: PieceWork[];
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
};

const FormPlacework = ({ piecesWork, date, deleteItem, openModal }: Props) => {
  const [selectData, setSelectData] = useState<PieceWork | null>(null);
  const clickHandler = useCallback(() => {
    setSelectData(null);
    openModal();
  }, [openModal]);

  return (
    <div className={css.root}>
      <div className={css.list}>
        {!piecesWork ? (
          <div style={{ textAlign: 'center' }}>Здесь ничего нет</div>
        ) : (
          piecesWork.map((item) => (
            <Detail
              date={date}
              item={item}
              key={item.key}
              openModal={openModal}
              deleteItem={deleteItem}
              setSelectData={setSelectData}
            />
          ))
        )}
      </div>
      <Button onClick={clickHandler} text="Добавить изделие" />
      <AddItemModalContainer date={date} pieceWork={selectData} />
    </div>
  );
};

export default FormPlacework;
