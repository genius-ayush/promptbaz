import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="" style={{ width:"100vh"}}>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}