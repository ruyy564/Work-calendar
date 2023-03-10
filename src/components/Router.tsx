import { RouterProvider } from 'react-router-dom';

import { publicRouter, privateRouter } from '../routes';

const Router = () => {
  const auth = true;
  const router = auth ? privateRouter : publicRouter;

  return <RouterProvider router={router} />;
};

export default Router;
