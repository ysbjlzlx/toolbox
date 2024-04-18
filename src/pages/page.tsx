import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const Component: FC = () => {
  return <Navigate to="/json/json-editor" replace={true} />;
};
