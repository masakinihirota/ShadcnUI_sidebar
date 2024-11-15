"use client";
// 👆️必要

import { AppSidebar } from "@/components/app-sidebar_20";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

function CustomTrigger() {
	const { toggleSidebar } = useSidebar();

	return (
		<button type="button" onClick={toggleSidebar}>
			Toggle Sidebar
		</button>
	);
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				{/* カスタムトリガー */}
				<CustomTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}

