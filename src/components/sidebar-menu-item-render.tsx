import type { FC } from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { MenuObject } from "@/typing";

export const SidebarMenuItemRender: FC<{ menuData: MenuObject }> = ({ menuData }) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem key={menuData.name}>
            <SidebarMenuButton isActive={menuData.isActive} render={<a href={menuData.path} />}>
              {menuData.name}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
