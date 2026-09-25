import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocation } from "react-router";
import { SidebarMenuButtonRender } from "@/components/sidebar-menu-button-render";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
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
        {menuData.map((item) => (
          <Collapsible key={item.name} defaultOpen={isActive(location.pathname, item)} render={<SidebarMenuItem />}>
            <SidebarMenuButton
              tooltip={item.name}
              render={<SidebarMenuButtonRender path={item.path || "#"} name={item.name} />}
            >
              {item.icon}
              <span>{item.name}</span>
            </SidebarMenuButton>
            {item?.children?.length ? (
              <>
                <CollapsibleTrigger render={<SidebarMenuAction className="aria-expanded:rotate-90" />}>
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                  <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.children?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton
                          render={<SidebarMenuButtonRender path={subItem.path || "#"} name={subItem.name} />}
                        />
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : null}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
