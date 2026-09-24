import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";
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
import type { MenuObject } from "@/typing";

export function NavMain({ menuData }: { menuData: MenuObject[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {menuData.map((item) => (
          <Collapsible key={item.name} defaultOpen={item.isActive} render={<SidebarMenuItem />}>
            <SidebarMenuButton
              tooltip={item.name}
              render={<Link to={item.path} data-d="ddd" />}
              isActive={item.isActive}
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
                        <SidebarMenuSubButton render={<a href={subItem.path} />}>
                          <span>{subItem.name}</span>
                        </SidebarMenuSubButton>
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
