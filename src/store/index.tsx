import { configureStore } from '@reduxjs/toolkit';

import calendarReducer from './featurs/calendarSlice';
import modalReducer from './featurs/modalSlice';
import eventReducer from './featurs/eventSlice';

const reducer = {
  calendar: calendarReducer,
  modalsWindowVisible: modalReducer,
  events: eventReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
