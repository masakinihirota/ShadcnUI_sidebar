import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const projects = [
	{
		name: "Project 1",
		url: "/project1",
		icon: "Activity",
	},
	{
		name: "Project 2",
		url: "/project2",
		icon: "Activity",
	},
	{
		name: "Project 3",
		url: "/project3",
		icon: "Activity",
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{projects.map((project) => (
								<SidebarMenuItem key={project.name}>
									<SidebarMenuButton asChild>
										<a href={project.url}>
											<project.icon />
											<span>{project.name}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
