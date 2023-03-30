import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Modal, State } from '../../entities/Modal';
import { MODAL_FORMS } from '../../entities/Modal/constants';

const initialState: State = {
  [MODAL_FORMS.ADD_EVENT_FORM]: false,
  [MODAL_FORMS.DOWNLOAD_PAID_LIST_FORM]: false,
  [MODAL_FORMS.ADD_ITEM_FORM]: false,
};

export const modalSlice = createSlice({
  name: 'modalsWindowVisible',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<Modal>) => {
      state[payload] = true;
    },
    closeModal: (state, { payload }: PayloadAction<Modal>) => {
      state[payload] = false;
    },
    resetState: (state) => {
      state[MODAL_FORMS.ADD_EVENT_FORM] = false;
      state[MODAL_FORMS.DOWNLOAD_PAID_LIST_FORM] = false;
      state[MODAL_FORMS.ADD_ITEM_FORM] = false;
    },
  },
});

export const { openModal, closeModal, resetState } = modalSlice.actions;

export default modalSlice.reducer;
