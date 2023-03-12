import { configureStore } from '@reduxjs/toolkit';

import calendarReducer from './featurs/calendarSlice';
import modalReducer from './featurs/modalSlice';
import eventReducer from './featurs/eventSlice';
import userReducer from './featurs/userSlice';

const reducer = {
  calendar: calendarReducer,
  modalsWindowVisible: modalReducer,
  eventsOfCalendar: eventReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
