import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import CalendarPage from '../pages/CalendarPage';

export const publicRouter = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
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
