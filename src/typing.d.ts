export type MenuObject = {
  name: string;
  icon?: ReactNode;
  isActive?: boolean;
  path?: string;
  children?: MenuObject[];
};
