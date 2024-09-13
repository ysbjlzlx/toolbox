import type { IconProps } from "@iconify/react";
import { Icon } from "@iconify/react";
import type { FC } from "react";

interface Props extends IconProps {}

const Iconify: FC<Props> = ({ icon, ...props }) => {
  return (
    <span className="anticon" aria-label={typeof icon === "string" ? icon : "icon"}>
      <Icon icon={icon} {...props} />
    </span>
  );
};

export default Iconify;
