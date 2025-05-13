import './App.css'
import Portfolio from "./pages/Portfolio"
import Interest from "./pages/Interest"
import ProjectForm from "./pages/ProjectForm"
import Home from './pages/Home'
import NavBar from "./Components/NavBar.jsx"
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer.jsx'
 
function App() {
 
 
  return (
    <>

      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/projectform" element={<ProjectForm />} />
      </Routes>

      <Footer/>
 
 
   
    </>
  )
}
 
export default App
