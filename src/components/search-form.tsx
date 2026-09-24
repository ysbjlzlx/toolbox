import { SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Label } from "src/components/ui/label";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "src/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput id="search" placeholder="Search the docs..." className="pl-8" />
          <HugeiconsIcon
            icon={SearchIcon}
            strokeWidth={2}
            className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 select-none opacity-50"
          />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
