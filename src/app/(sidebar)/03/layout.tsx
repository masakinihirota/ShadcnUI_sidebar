import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { cookies } from "next/headers";

import { AppSidebar } from "@/components/app-sidebar_03";

export default async function Layout({
	children,
}: { children: React.ReactNode }) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
