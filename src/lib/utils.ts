import { isEmpty } from "lodash-es";
import type { MenuObject } from "@/typing";

export { cn } from "cn";

export const isActive = (pathname: string, menuData: MenuObject): boolean => {
  if (menuData?.path === pathname) {
    return true;
  }
  if (!isEmpty(menuData?.children)) {
    return menuData.children.some((child) => isActive(pathname, child));
  }
  return false;
};
