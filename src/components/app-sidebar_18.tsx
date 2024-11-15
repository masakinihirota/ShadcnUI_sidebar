import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

const menuItems = [
	{ id: 1, name: "Project 1" },
	{ id: 2, name: "Project 2" },
	{ id: 3, name: "Project 3" },
	{ id: 4, name: "Project 4" },
	{ id: 5, name: "Project 5" },
];

export function NavProjectsSkeleton() {
	return (
		<SidebarMenu>
			{menuItems.map((item) => (
				<SidebarMenuItem key={item.id}>
					<SidebarMenuSkeleton>{item.name}</SidebarMenuSkeleton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);
}

export function AppSidebar() {
	return (
		<SidebarMenu>
			<Collapsible defaultOpen className="group/collapsible">
				<SidebarMenuItem>
					<CollapsibleTrigger asChild>
						<SidebarMenuButton />
					</CollapsibleTrigger>
					<CollapsibleContent>
						<SidebarMenuSub>
							<SidebarMenuSubItem />
						</SidebarMenuSub>
					</CollapsibleContent>
				</SidebarMenuItem>
			</Collapsible>
		</SidebarMenu>
	);
}
