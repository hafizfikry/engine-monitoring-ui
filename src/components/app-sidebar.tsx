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
                url: "/engine/1",
            },
            {
                title: "DG 2",
                url: "/engine/2",
            },
            {
                title: "DG 3",
                url: "/engine/3",
            },
            {
                title: "DG 4",
                url: "/engine/4",
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