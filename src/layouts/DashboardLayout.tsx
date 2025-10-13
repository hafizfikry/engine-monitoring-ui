import type { ReactNode } from "react"
import { 
  NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, 
  NavigationMenuContent, NavigationMenuLink
 } from "@/components/ui/navigation-menu"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-2">
        <NavigationMenu>
          <NavigationMenuList>
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
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
