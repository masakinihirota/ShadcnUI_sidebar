import {
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { Home, MoreHorizontal } from "lucide-react";

export function AppSidebar() {
	return (
		<SidebarMenuItem>
			<SidebarMenuButton asChild>
				<a href="/">
					<Home />
					<span>Home</span>
				</a>
			</SidebarMenuButton>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuAction>
						<MoreHorizontal />
					</SidebarMenuAction>
				</DropdownMenuTrigger>
				<DropdownMenuContent side="right" align="start">
					<DropdownMenuItem>
						<span>Edit Project</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Delete Project</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</SidebarMenuItem>
	);
}
