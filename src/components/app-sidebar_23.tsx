import { NavProjectsSkeleton } from "@/components/app-sidebar_18";
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
import React from "react";

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
