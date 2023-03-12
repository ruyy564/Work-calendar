import { useState, useCallback } from 'react';

import Detail from '../Detail';
import Button from '../../ui/Button';
import AddItemModalContainer from '../../../containers/Event/AddItemModalContainer';
import { Piecework } from '../../../entities/Event';

import css from './index.module.css';

type Props = {
  date: string;
  pieceworks?: Piecework[];
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
};

const FormPlacework = ({ pieceworks, date, deleteItem, openModal }: Props) => {
  const [selectData, setSelectData] = useState<Piecework | null>(null);
  const clickHandler = useCallback(() => {
    setSelectData(null);
    openModal();
  }, [openModal]);

  return (
    <div className={css.root}>
      <div className={css.list}>
        {!pieceworks ? (
          <div style={{ textAlign: 'center' }}>Здесь ничего нет</div>
        ) : (
          pieceworks.map((item) => (
            <Detail
              date={date}
              item={item}
              key={item.id}
              openModal={openModal}
              deleteItem={deleteItem}
              setSelectData={setSelectData}
            />
          ))
        )}
      </div>
      <Button onClick={clickHandler} text="Добавить изделие" />
      <AddItemModalContainer
        date={date}
        piecework={selectData}
        hasEvent={Boolean(pieceworks)}
      />
    </div>
  );
};

export default FormPlacework;
