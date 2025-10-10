import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Engine Monitor</h1>
        <nav className="space-y-2">
          <a href="#" className="block hover:text-blue-300">Dashboard</a>
          <a href="#" className="block hover:text-blue-300">Logs</a>
          <a href="#" className="block hover:text-blue-300">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
