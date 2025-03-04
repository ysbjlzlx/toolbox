import type { FC } from "react";
import { Navigate } from "react-router";

export const Component: FC = () => {
  return <Navigate to="/json/json-editor" replace={true} />;
};
