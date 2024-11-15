import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { Home, MoreHorizontal, Plus, Sidebar } from "lucide-react";

export function AppSidebar() {
	return (
		<SidebarMenuItem>
			<SidebarMenuButton />
			<SidebarMenuSub>
				<SidebarMenuSubItem>
					<SidebarMenuSubButton />
				</SidebarMenuSubItem>
				<SidebarMenuSubItem>
					<SidebarMenuSubButton />
				</SidebarMenuSubItem>
			</SidebarMenuSub>
		</SidebarMenuItem>
	);
}
