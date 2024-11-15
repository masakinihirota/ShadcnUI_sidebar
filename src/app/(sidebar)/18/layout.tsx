import { AppSidebar, NavProjectsSkeleton } from "@/components/app-sidebar_18";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				<NavProjectsSkeleton />
				{children}
			</main>
		</SidebarProvider>
	);
}
