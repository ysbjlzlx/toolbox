import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: ClassValue;
}

const PageContainer: FC<Props> = ({ children, className = [] }) => {
  return <div className={cn("h-[calc(100dvh-56px)] p-4 md:h-dvh", className)}>{children}</div>;
};

export default PageContainer;
