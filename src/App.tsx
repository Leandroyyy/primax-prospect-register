
import './global.css'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { ProspectForm } from './components/prospectForm'
import { ProspectFinished } from './components/prospectFinished'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterProspect } from './pages/registerProspect'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterProspect/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
