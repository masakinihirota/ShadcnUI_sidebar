import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		// <Sidebar collapsible="offcanvas | icon | none">
		<Sidebar collapsible="icon">
			<SidebarContent />
		</Sidebar>
	);
}
