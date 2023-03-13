import { useInput } from './useInput';
import { Piecework } from '../entities/Event';
import validateInputNumber from '../helpers/validateInputNumber';
import {
  getPieceworkCost,
  getPieceworkCount,
  getPieceworkName,
} from '../entities/Event/getters';

const validateInput = validateInputNumber(0);

export const useAddItem = (data: Piecework | null) => {
  const cost = useInput(data ? getPieceworkCost(data) : 0, validateInput);
  const count = useInput(data ? getPieceworkCount(data) : 1, validateInput);
  const name = useInput(data ? getPieceworkName(data) : '');

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
