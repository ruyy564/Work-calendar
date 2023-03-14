import { useState, useCallback } from 'react';

import Detail from '../Detail';
import Button from '../../ui/Button';
import AddItemModalContainer from '../../../containers/Event/AddItemModalContainer';
import { Piecework } from '../../../entities/Event';
import { getPieceworkId } from '../../../entities/Event/getters';
import { STATUS } from '../../../constants';
import Loader from '../../ui/Loader';

import css from './index.module.css';

type Props = {
  date: string;
  pieceworks?: Piecework[];
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  openModal: () => void;
  deleteItem: (date: string, key: string) => void;
};

const FormPlacework = ({
  status,
  pieceworks,
  date,
  deleteItem,
  openModal,
}: Props) => {
  const [selectData, setSelectData] = useState<Piecework | null>(null);
  const clickHandler = useCallback(() => {
    setSelectData(null);
    openModal();
  }, [openModal]);

  return (
    <div className={css.root}>
      <div className={css.list}>
        {status === STATUS.loading && <Loader isPrimary={true} />}
        {!pieceworks ? (
          <div style={{ textAlign: 'center' }}>Здесь ничего нет</div>
        ) : (
          pieceworks.map((item) => (
            <Detail
              item={item}
              key={getPieceworkId(item)}
              openModal={openModal}
              deleteItem={deleteItem}
              setSelectData={setSelectData}
            />
          ))
        )}
      </div>
      <Button onClick={clickHandler} text="Добавить изделие" />
      <AddItemModalContainer date={date} piecework={selectData} />
    </div>
  );
};

export default FormPlacework;
