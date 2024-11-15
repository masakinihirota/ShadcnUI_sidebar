import { AppSidebar } from "@/components/app-sidebar_04";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				{/* 右側が開く */}
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
