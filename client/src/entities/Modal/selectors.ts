import type { RootState } from '../../store';
import { Modal } from '.';

export const selectModalVisible = (
  state: RootState,
  modalForm: Modal
): boolean => state.modalsWindowVisible[modalForm];
