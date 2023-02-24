import { useInput } from './useInput';
import { TimeBased } from '../entities/Event';
import validateInputNumber from '../helpers/validateInputNumber';

export const useTimeBasedForm = (data?: TimeBased) => {
  const costInHour = useInput(
    data ? data.costInHour : 0,
    validateInputNumber(0)
  );
  const mainWorkTime = useInput(
    data ? data.mainWorkTime : 0,
    validateInputNumber(0, 24)
  );
  const overTime = useInput(
    data ? data.overTime : 0,
    validateInputNumber(0, 24)
  );
  const firstTwoHourRatio = useInput(
    data ? data.firstTwoHourRatio : 1.5,
    validateInputNumber(1.5)
  );
  const otherHours = useInput(
    data ? data.otherHours : 2,
    validateInputNumber(2)
  );

  return {
    costInHour,
    mainWorkTime,
    overTime,
    firstTwoHourRatio,
    otherHours,
  };
};
