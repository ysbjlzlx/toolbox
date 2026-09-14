import type { FC } from "react";
import { Navigate } from "react-router";

const Component: FC = () => {
  return <Navigate to="/json/json-editor" replace={true} />;
};

export default Component;
