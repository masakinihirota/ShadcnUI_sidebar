import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		// <Sidebar variant="sidebar | floating | inset" />
		<Sidebar variant="inset">
			<SidebarInset>
				<SidebarContent />
			</SidebarInset>
		</Sidebar>
	);
}
