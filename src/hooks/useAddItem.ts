import { useInput } from './useInput';
import { PieceWork } from '../entities/Event';
import validateInputNumber from '../helpers/validateInputNumber';

export const useAddItem = (data: PieceWork | null) => {
  const cost = useInput(data ? data.cost : 0, validateInputNumber(0));
  const count = useInput(data ? data.count : 0, validateInputNumber(0));
  const name = useInput(data ? data.name : '');

  const clear = () => {
    cost.clear();
    name.clear();
    count.clear();
  };

  return {
    cost,
    count,
    name,
    clear,
  };
};
