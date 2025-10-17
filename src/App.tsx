import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import '@/styles/App.css'

// Pages
import Engine from '@/features/engine/Engine'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/engine' element={<Engine />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
