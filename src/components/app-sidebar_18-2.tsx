import { Sidebar, SidebarContent, SidebarSeparator, SidebarGroup, SidebarHeader, } from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarSeparator />
      1
      <SidebarSeparator />
      2
      <SidebarSeparator />
      3
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup />
        <SidebarSeparator />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}

