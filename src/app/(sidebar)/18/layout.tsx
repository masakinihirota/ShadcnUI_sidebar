import { AppSidebar } from "@/components/app-sidebar_18"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  // このLayoutファイルではサイドバーのメニュー等を表示、操作するだけです。
  // サイドバーの中の機能はapp-sidebar_18.tsxに書かれています。
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
