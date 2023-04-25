import { useInput } from './useInput';
import { Timebased } from '../entities/Event';
import {
  getTimebasedOverTime,
  getTimebasedCostInHour,
  getTimebasedFirstTwoHourRatio,
  getTimebasedMainWorkTime,
  getTimebasedOtherHoursRatio,
} from '../entities/Event/getters';
import validateInputNumber from '../helpers/validateInputNumber';
import { MAX_INPUT_COUNT, MIN_INPUT_COUNT } from '../constants';

const validateCostInHour = validateInputNumber(
  MIN_INPUT_COUNT,
  MAX_INPUT_COUNT
);
const validateTime = validateInputNumber(MIN_INPUT_COUNT, 24);
const validateRatioFirst = validateInputNumber(MIN_INPUT_COUNT);
const validateRatioSecond = validateInputNumber(MIN_INPUT_COUNT);

export const useTimeBasedForm = (timebased?: Timebased) => {
  const costInHour = useInput(
    timebased ? getTimebasedCostInHour(timebased) : 0,
    validateCostInHour
  );
  const mainWorkTime = useInput(
    timebased ? getTimebasedMainWorkTime(timebased) : 0,
    validateTime
  );
  const overTime = useInput(
    timebased ? getTimebasedOverTime(timebased) : 0,
    validateTime
  );
  const firstTwoHourRatio = useInput(
    timebased ? getTimebasedFirstTwoHourRatio(timebased) : 1.5,
    validateRatioFirst
  );
  const otherHoursRatio = useInput(
    timebased ? getTimebasedOtherHoursRatio(timebased) : 2,
    validateRatioSecond
  );

  return {
    costInHour,
    mainWorkTime,
    overTime,
    firstTwoHourRatio,
    otherHoursRatio,
  };
};
