import type { FC } from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { MenuObject } from "@/typing";

export const SidebarGroupMenuRender: FC<{ menuData: MenuObject }> = ({ menuData }) => {
  return (
    <SidebarGroup key={menuData.name}>
      <SidebarGroupLabel>
        {menuData.icon}
        <span className="ml-2">{menuData.name}</span>
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {menuData?.children?.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton isActive={item.isActive} render={<a href={item.path} />}>
                {item.name}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
