import { RouterProvider } from 'react-router-dom';

import { publicRouter, privateRouter } from '../routes';

type Props = {
  auth: boolean;
};

const Router = ({ auth }: Props) => {
  const router = auth ? privateRouter : publicRouter;

  return <RouterProvider router={router} />;
};

export default Router;
