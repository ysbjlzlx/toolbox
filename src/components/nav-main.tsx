import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { isEmpty } from "es-toolkit/compat";
import { Link, useLocation } from "react-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { isActive } from "@/lib/utils";
import type { MenuObject } from "@/typing";

export function NavMain({ menuData }: { menuData: MenuObject[] }) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <SidebarGroup>
      <SidebarMenu>
        {menuData.map((item) =>
          isEmpty(item?.children) ? (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton tooltip={item.name} render={<Link to={item.path || "#"} />}>
                {item.icon}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <Collapsible key={item.name} defaultOpen={isActive(location.pathname, item)}>
              <SidebarMenuItem>
                <CollapsibleTrigger
                  render={
                    <SidebarMenuButton tooltip={item.name} className="w-full">
                      {item.icon}
                      <span>{item.name}</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-auto" />
                    </SidebarMenuButton>
                  }
                />

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.children?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton render={<Link to={subItem.path || "#"} />}>
                          <span>{subItem.name}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
