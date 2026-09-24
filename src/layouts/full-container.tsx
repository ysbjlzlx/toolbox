import { PageContainer } from "@ant-design/pro-components";
import type React from "react";
import type { FC } from "react";
import { Outlet } from "react-router";

import { cn } from "@/lib/utils.ts";

export const FullContainer: FC<React.PropsWithChildren> = () => {
  return (
    <PageContainer title={false}>
      <div className={cn("h-[calc(100dvh-56px)]", "md:h-dvh")}>
        <Outlet />
      </div>
    </PageContainer>
  );
};
