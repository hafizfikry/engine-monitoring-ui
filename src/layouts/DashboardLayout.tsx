import { Outlet } from "react-router-dom"
import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"

export default function DashboardLayout() {
  const [pageTitle, setPageTitle] = useState("Dashboard")

  return (
    <SidebarProvider>
      <div className="h-screen flex overflow-hidden">
        {/* Sidebar overlay */}
        <AppSidebar />

        <div className="flex-1 flex flex-col w-full">

          {/* MAIN CONTENT */}
          <main className="flex-1 overflow-y-auto p-6 ">

            <div className="px-4 pt-2">
              <div className="bg-white shadow h-14 flex items-center rounded-2xl px-3">
                <AppNavbar title={pageTitle} />
              </div>
            </div>

            <div className="max-w-screen-3xl mx-auto px-6 mt-3">
              <Outlet context={{ setPageTitle }} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

