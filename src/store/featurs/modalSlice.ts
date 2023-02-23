import { createSlice } from '@reduxjs/toolkit';

import { Modal, State } from '../../entities/Modal';
import { MODAL_FORMS } from '../../entities/Modal/constants';

type ActionType = {
  payload: Modal;
};

const initialState: State = {
  [MODAL_FORMS.ADD_EVENT_FORM]: false,
  [MODAL_FORMS.DOWNLOAD_PAID_LIST_FORM]: false,
  [MODAL_FORMS.ADD_ITEM_FORM]: false,
};

export const modalSlice = createSlice({
  name: 'modalsWindowVisible',
  initialState,
  reducers: {
    openModal: (state, { payload }: ActionType) => {
      state[payload] = true;
    },
    closeModal: (state, { payload }: ActionType) => {
      state[payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
