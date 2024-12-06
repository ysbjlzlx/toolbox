import { PageContainer } from "@ant-design/pro-components";
import type React from "react";
import type { FC } from "react";

import { cn } from "@/lib/utils.ts";

export const FullContainer: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PageContainer title={false}>
      <div className={cn("h-[calc(100dvh-56px)]", "md:h-dvh")}>{children}</div>
    </PageContainer>
  );
};
