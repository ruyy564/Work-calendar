import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './featurs/calendarSlice';
import modalReducer from './featurs/modalSlice';

const reducer = {
  calendar: calendarReducer,
  modalsWindowVisible: modalReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
