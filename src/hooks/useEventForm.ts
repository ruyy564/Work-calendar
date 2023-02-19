import { useInput } from './useInput';
import validateInputNumber from '../helpers/validateInputNumber';

export const useEventForm = () => {
  const costHour = useInput('0', validateInputNumber(0));
  const mainTime = useInput('0', validateInputNumber(0, 24));
  const secondTime = useInput('0', validateInputNumber(0, 24));
  const firstRatio = useInput('1.5', validateInputNumber(1.5));
  const secondRatio = useInput('2', validateInputNumber(2));

  const clearForm = () => {
    costHour.clearValue();
    mainTime.clearValue();
    secondTime.clearValue();
    firstRatio.clearValue();
    secondRatio.clearValue();
  };

  return {
    costHour,
    mainTime,
    secondTime,
    firstRatio,
    secondRatio,
    clearForm,
  };
};
