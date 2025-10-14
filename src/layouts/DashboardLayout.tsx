import type { ReactNode } from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="h-screen flex overflow-hidden">
        {/* Sidebar overlay */}
        <AppSidebar />

        <div className="flex-1 flex flex-col w-full">
          {/* HEADER */}
          {/* <header className="bg-white shadow fixed top-0 left-0 right-0 z-50 h-14 flex items-center">
          </header> */}

          {/* MAIN CONTENT */}
          <main className="flex-1 overflow-y-auto p-6 ">

            <div className="px-4 pt-2">
              <div className="bg-white shadow h-14 flex items-center rounded-2xl px-3">
                <NavigationMenu viewport={false} className="p-3">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <SidebarTrigger />
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink href="#">Engine</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink href="#">Preferences</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>


            <div className="max-w-screen-3xl mx-auto px-6 mt-3">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

