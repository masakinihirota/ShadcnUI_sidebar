import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";

// This is sample data.
const data = {
	navMain: [
		{
			title: "Getting Started",
			url: "#",
			items: [
				{
					title: "Installation",
					url: "#",
				},
				{
					title: "Project Structure",
					url: "#",
				},
			],
		},
		{
			title: "Building Your Application",
			url: "#",
			items: [
				{
					title: "Routing",
					url: "#",
				},
				{
					title: "Data Fetching",
					url: "#",
					isActive: true,
				},
				{
					title: "Rendering",
					url: "#",
				},
				{
					title: "Caching",
					url: "#",
				},
				{
					title: "Styling",
					url: "#",
				},
				{
					title: "Optimizing",
					url: "#",
				},
				{
					title: "Configuring",
					url: "#",
				},
				{
					title: "Testing",
					url: "#",
				},
				{
					title: "Authentication",
					url: "#",
				},
				{
					title: "Deploying",
					url: "#",
				},
				{
					title: "Upgrading",
					url: "#",
				},
				{
					title: "Examples",
					url: "#",
				},
			],
		},
		{
			title: "API Reference",
			url: "#",
			items: [
				{
					title: "Components",
					url: "#",
				},
				{
					title: "File Conventions",
					url: "#",
				},
				{
					title: "Functions",
					url: "#",
				},
				{
					title: "next.config.js Options",
					url: "#",
				},
				{
					title: "CLI",
					url: "#",
				},
				{
					title: "Edge Runtime",
					url: "#",
				},
			],
		},
		{
			title: "Architecture",
			url: "#",
			items: [
				{
					title: "Accessibility",
					url: "#",
				},
				{
					title: "Fast Refresh",
					url: "#",
				},
				{
					title: "Next.js Compiler",
					url: "#",
				},
				{
					title: "Supported Browsers",
					url: "#",
				},
				{
					title: "Turbopack",
					url: "#",
				},
			],
		},
		{
			title: "Community",
			url: "#",
			items: [
				{
					title: "Contribution Guide",
					url: "#",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<GalleryVerticalEnd className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Documentation</span>
									<span className="">v1.0.0</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						{data.navMain.map((item) => (
							<Collapsible key={item.title} defaultOpen className="group/collapsible">
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton asChild>
											<a href={item.url} className="font-medium">
												{item.title}
											</a>
										</SidebarMenuButton>
									</CollapsibleTrigger>
									{item.items?.length ? (
										<CollapsibleContent>
											<SidebarMenuSub className="ml-0 border-l-0 px-1.5">
												{item.items.map((subItem) => (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton asChild isActive={subItem.isActive}>
															<a href={subItem.url}>{subItem.title}</a>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									) : null}
								</SidebarMenuItem>
							</Collapsible>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
