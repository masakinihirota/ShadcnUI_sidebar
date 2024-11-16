import {
	Sidebar,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Home, Plus } from "lucide-react";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarMenuItem>
				<SidebarMenuButton asChild>
					<a href="/">
						<Home />
						<span>Home</span>
					</a>
				</SidebarMenuButton>
				<SidebarMenuAction>
					<Plus /> <span className="sr-only">Add Project</span>
				</SidebarMenuAction>
			</SidebarMenuItem>
		</Sidebar>
	);
}
