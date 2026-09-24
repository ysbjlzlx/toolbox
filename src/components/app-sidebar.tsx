import type * as React from "react";
import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { menuData } from "@/layouts/next-menu-data";
import { NavMain } from "./nav-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <img src="/logo.png" alt="logo" className="bg-white" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <Link to="/next/json/json-editor">
                  <span className="truncate font-medium">Toobox</span>
                </Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain menuData={menuData} />
        {/*{menuData.map((item) =>
          isEmpty(item?.children) ? (
            <SidebarMenuItemRender menuData={item as MenuObject} key={item.name} />
          ) : (
            <SidebarGroupMenuRender menuData={item as MenuObject} key={item.name} />
          ),
        )}*/}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
