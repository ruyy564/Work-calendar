import { useInput } from './useInput';
import { PieceWork } from '../entities/Event';
import validateInputNumber from '../helpers/validateInputNumber';

const validateInput = validateInputNumber(0);

export const useAddItem = (data: PieceWork | null) => {
  const cost = useInput(data ? data.cost : 0, validateInput);
  const count = useInput(data ? data.count : 0, validateInput);
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
