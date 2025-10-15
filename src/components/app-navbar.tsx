import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { SidebarTrigger } from "./ui/sidebar"

export function AppNavbar() {
    return (
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
    )
}