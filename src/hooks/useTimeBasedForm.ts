import { useInput } from './useInput';
import { TimeBased } from '../entities/Event';
import validateInputNumber from '../helpers/validateInputNumber';

const validateCostInHour = validateInputNumber(0);
const validateTime = validateInputNumber(0, 24);
const validateRatioFirst = validateInputNumber(1.5);
const validateRatioSecond = validateInputNumber(2);

export const useTimeBasedForm = (data?: TimeBased) => {
  const costInHour = useInput(data ? data.costInHour : 0, validateCostInHour);
  const mainWorkTime = useInput(data ? data.mainWorkTime : 0, validateTime);
  const overTime = useInput(data ? data.overTime : 0, validateTime);
  const firstTwoHourRatio = useInput(
    data ? data.firstTwoHourRatio : 1.5,
    validateRatioFirst
  );
  const otherHours = useInput(data ? data.otherHours : 2, validateRatioSecond);

  return {
    costInHour,
    mainWorkTime,
    overTime,
    firstTwoHourRatio,
    otherHours,
  };
};
