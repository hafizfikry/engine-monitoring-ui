import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Power } from "lucide-react"

const items = [
    {
        title: "Power",
        url: "#",
        icon: Power
    },
    {
        title: "DG 1",
        url: "#",
        icon: Power
    },
    {
        title: "DG 2",
        url: "#",
        icon: Power
    },
    {
        title: "DG 3",
        url: "#",
        icon: Power
    },
    {
        title: "DG 4",
        url: "#",
        icon: Power
    },
]

export function AppSidebar() {
  return (
    <Sidebar className="fixed left-0 top-0 h-screen z-40" variant="floating">
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Power</SidebarGroupLabel>
            <SidebarGroupContent>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{ item.title }</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}