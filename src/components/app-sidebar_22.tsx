import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

async function NavProjects() {
	// ダミーデータ
	const fetchProjects = async () => {
		return [
			{ name: "Project One", url: "/project-one", icon: () => <span>📁</span> },
			{ name: "Project Two", url: "/project-two", icon: () => <span>📂</span> },
			{ name: "Project Three", url: "/project-three", icon: () => <span>📄</span> },
		];
	};
  const projects = await fetchProjects()

  return (
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
  )
}


export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup />
				<NavProjects/>
			</SidebarContent>
			<SidebarFooter />
			<SidebarRail />
		</Sidebar>
	);
}
