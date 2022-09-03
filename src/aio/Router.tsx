import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../config/routes';

const Router = (): ReactElement | null => {
  return useRoutes(routes);
};

export default Router;
