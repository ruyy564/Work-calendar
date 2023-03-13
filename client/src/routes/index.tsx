import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTE_TO_LOGIN, ROUTE_TO_REGISTRATION } from './constants';
import AuthPage from '../pages/AuthPage';
import CalendarPage from '../pages/CalendarPage';

export const publicRouter = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to={ROUTE_TO_LOGIN} />,
  },
  {
    path: ROUTE_TO_LOGIN,
    element: <AuthPage />,
  },

  {
    path: ROUTE_TO_REGISTRATION,
    element: <AuthPage />,
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
