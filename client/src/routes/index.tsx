import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  ROUTE_TO_LOGIN,
  ROUTE_TO_REGISTRATION,
  ROUTE_TO_REGISTRATION_COMPLITE,
  ROUTE_TO_EMAIL_SEND,
  ROUTE_TO_ERROR,
} from './constants';
import AuthPage from '../pages/AuthPage';
import CalendarPage from '../pages/CalendarPage';
import ErrorPage from '../pages/ErrorPage';

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
    path: ROUTE_TO_ERROR,
    element: <ErrorPage />,
  },
  {
    path: ROUTE_TO_REGISTRATION,
    element: <AuthPage />,
  },
  {
    path: ROUTE_TO_REGISTRATION_COMPLITE,
    element: <AuthPage />,
  },
  {
    path: ROUTE_TO_EMAIL_SEND,
    element: <AuthPage />,
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
  },
  {
    path: ROUTE_TO_ERROR,
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
