import type { FC } from "react";
import { Link } from "react-router";

interface SidebarMenuButtonRenderProps {
  path: string;
  name: string;
}

export const SidebarMenuButtonRender: FC<SidebarMenuButtonRenderProps> = ({ path, name }) => {
  console.log(name);
  return <Link to={path} />;
};
