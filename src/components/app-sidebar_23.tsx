import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";

const menuItems = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
  { id: 3, name: "Project 3" },
  { id: 4, name: "Project 4" },
  { id: 5, name: "Project 5" },
];

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}


async function NavProjects() {
	// ダミーデータ
	const fetchProjects = async () => {
		// 時間をかける
		await new Promise((resolve) => setTimeout(resolve, 3000));
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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <React.Suspense fallback={<NavProjectsSkeleton />}>
              <NavProjects />
            </React.Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
		</Sidebar>
	);
}
