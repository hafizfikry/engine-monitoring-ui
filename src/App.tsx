import './styles/App.css'
import DashboardLayout from './layouts/DashboardLayout'
import EngineStatus from './features/engine/components/EngineStatus'

function App() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Engine</h2>
      <EngineStatus />
    </DashboardLayout>
  )
}

export default App
