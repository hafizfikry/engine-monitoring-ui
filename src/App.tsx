import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import '@/styles/App.css'

// Pages
import Engine from '@/features/engine/Engine'
import Dashboard from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/engine/:engineId' element={<Engine />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
