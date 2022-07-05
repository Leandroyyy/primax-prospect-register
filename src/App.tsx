
import './global.css'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { ProspectForm } from './components/prospectForm'
import { ProspectFinished } from './components/prospectFinished'



function App() {
  return (
    <>
      <NavBar/>
      <ProspectForm/>
      <Footer/>
    </>
  )
}

export default App
