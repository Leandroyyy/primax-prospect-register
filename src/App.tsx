
import './global.css'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { ProspectForm } from './components/prospectForm'
import { ProspectFinished } from './components/prospectFinished'
import { useState } from 'react'

function App() {

  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <NavBar/>
      <ProspectForm/>
      <Footer/>
      <ProspectFinished trigger={modal} setTrigger={() => setModal(false)}/>
    </>
  )
}

export default App
