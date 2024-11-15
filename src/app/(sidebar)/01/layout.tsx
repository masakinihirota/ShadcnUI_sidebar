import { AppSidebar } from "@/components/app-sidebar_01";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		// Shadcn/UIのサイドバーを使うために必ず必要です。
		<SidebarProvider>
			{/* サイドバーの中身 */}
			<AppSidebar />
			<main>
				{/* サイドバーのトリガー */}
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
