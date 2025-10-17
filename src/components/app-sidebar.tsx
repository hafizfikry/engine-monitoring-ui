import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { BatteryCharging } from "lucide-react"
import { NavMain } from "@/components/ui/nav-main"

const navMain = [
    {
        title: "Power",
        url: "#",
        icon: BatteryCharging,
        isActive: false,
        items: [
            {
                title: "DG 1",
                url: "/engine",
            },
            {
                title: "DG 2",
                url: "/engine",
            },
            {
                title: "DG 3",
                url: "/engine",
            },
            {
                title: "DG 4",
                url: "/engine",
            },
        ]
    }
]

export function AppSidebar() {
  return (
    <Sidebar className="fixed left-0 top-0 h-screen z-40" variant="floating">
      <SidebarHeader />

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}