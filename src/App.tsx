import './styles/App.css'
import DashboardLayout from './layouts/DashboardLayout'
import EngineStatus from './features/engine/components/EngineStatus'

function App() {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <DashboardLayout>
        <h2 className="text-2xl font-semibold align-center mb-4 ms-3">Dashboard Engine</h2>
        <EngineStatus />
      </DashboardLayout>
    </div>
  )
}

export default App
