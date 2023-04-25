import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  ROUTE_TO_LOGIN,
  ROUTE_TO_REGISTRATION,
  ROUTE_TO_REGISTRATION_COMPLITE,
  ROUTE_TO_EMAIL_SEND,
  ROUTE_TO_ERROR,
  ROUTE_TO_MAIN,
} from './constants';
import AuthPage from '../pages/AuthPage';
import CalendarPage from '../pages/CalendarPage';
import ErrorPage from '../pages/ErrorPage';

export const publicRouter = createBrowserRouter([
  {
    path: ROUTE_TO_MAIN,
    element: <CalendarPage />,
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
  {
    path: '*',
    element: <Navigate to={ROUTE_TO_MAIN} replace />,
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: ROUTE_TO_MAIN,
    element: <CalendarPage />,
  },
  {
    path: ROUTE_TO_ERROR,
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTE_TO_MAIN} replace />,
  },
]);
