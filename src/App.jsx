import './App.css'
import Portfolio from "./pages/Portfolio"
import Interest from "./pages/Interest"
import ProjectForm from "./pages/ProjectForm"
import Home from './pages/Home'
import NavBar from "./Components/NavBar.jsx"
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Footer from './Components/Footer.jsx'
import Debutprojet from './Assets/Projets.js'
import { UserProvider } from './Components/TrackUser.jsx'
import Header from './Components/Header.jsx'

 
function App() {
 
  const [projets, setProjets] = useState(Debutprojet)

    const AddProjets = (projets) => {
      setProjets(prev => [...prev, projets])
    }

  return (
    <>
      <UserProvider>
      <NavBar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio projets={projets} />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/projectform" element={<ProjectForm AddProjets={AddProjets}/>} />
      </Routes>

      <Footer/>
    </UserProvider>
 
   
    </>
  )
}
 
export default App
