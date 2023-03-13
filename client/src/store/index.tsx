import { configureStore } from '@reduxjs/toolkit';

import calendarReducer from './featurs/calendarSlice';
import modalReducer from './featurs/modalSlice';
import eventReducer from './featurs/eventSlice';
import userReducer from './featurs/userSlice';
import { interceptor } from '../http';

const reducer = {
  calendar: calendarReducer,
  modalsWindowVisible: modalReducer,
  eventsOfCalendar: eventReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
});

//Приходится вызывать так, так как жалуется на то, что store не проинициализирован
interceptor(store);

export type RootState = ReturnType<typeof store.getState>;
