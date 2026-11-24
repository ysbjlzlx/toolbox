import { colors } from "@repo/colors/tailwindcss";
import { values } from "es-toolkit/compat";
import type { FC } from "react";

const { gray } = colors;
export const Component: FC = () => {
  return <div>{values(gray)}</div>;
};
