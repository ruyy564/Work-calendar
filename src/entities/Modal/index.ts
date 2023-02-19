import { MODAL_FORMS } from './constants';

export type Modal = keyof typeof MODAL_FORMS;

export type State = {
  [key in Modal]: boolean;
};
