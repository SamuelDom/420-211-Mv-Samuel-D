import './App.css'
import Portfolio from "./pages/Portfolio"
import Interest from "./pages/Interest"
import ProjectForm from "./pages/ProjectForm"
import Home from './pages/home'
import NavBar from "./Components/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/projectform" element={<ProjectForm />} />
    </Routes>


    <NavBar/>
    <Portfolio/>
    <Interest/>
    <ProjectForm/>
    </>
  )
}

export default App
