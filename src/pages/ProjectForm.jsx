import './ProjectForm.css'
import Form from '../Assets/Form.png'
import bluej from '../Assets/bluej.png'
import clogo from '../Assets/clogo.png'
import java from '../Assets/java.png'
import Jet from '../Assets/Jet.png'
import jquery from '../Assets/jquery.png'
import python from '../Assets/python.webp'
import react from '../Assets/react.png'
import vscode from '../Assets/vscode.jpg'
import { useContext } from "react";
import { UserContext } from "../Components/TrackUser"; 
import { Navigate } from "react-router-dom";



function ProjectForm(props){

   const { user } = useContext(UserContext);
    if (!user) return <Navigate to="/" />;

      function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const titre = formData.get("titre")
        const Desc = formData.get("Desc")
        const Date = formData.get("Date")
        const langage = formData.getAll("langage")
        const ide = formData.getAll("ide")
        const biblio = formData.getAll("biblio")
        const image = formData.get("img")
        const lien = formData.get("lien")

        const projet = {
          titre,
          Desc,
          Date,
          langage,
          ide,
          biblio,
          image,
          lien
        }
        props.AddProjets(projet)
        formEl.reset()
       console.log(projet)
    }


    return(
        <>

      

        <h1>Formulaire d'ajout</h1>
        
        
        <img src={Form} className="background-image" alt="Formulaire" />


            <form onSubmit={handleSubmit}>
                <h4>Langage</h4>
             <div className='Everycard'>
          <label className="card">
            <input type="checkbox" name="langage" value="java" />
            <span>Java</span>
          </label>

          <label className="card">
            <input type="checkbox" name="langage" value="python" />
            <span>Python</span>
          </label>

          <label className="card">
            <input type="checkbox" name="langage" value="HTML" />
            <span>HTML, CSS, JS</span>
          </label>

          <label className="card">
            <input type="checkbox" name="langage" value="clogo" />
            <span>C</span>
          </label>

                <h4>IDE</h4>
          <label className="card">
            <input type="checkbox" name="ide" value="bluej" />
            <span>BlueJ</span>
          </label>

          <label className="card">
            <input type="checkbox" name="ide" value="jet" />
            <span>JetBrains</span>
          </label>

          <label className="card">
            <input type="checkbox" name="ide" value="vscode" />
            <span>VS Code</span>
          </label>

            <h4>Bibliothèque/framework</h4>
          <label className="card">
            <input type="checkbox" name="biblio" value="jquery" />
            <span>jQuery</span>
          </label>

          <label className="card">
            <input type="checkbox" name="biblio" value="react" />
            <span>React</span>
          </label>

          

        </div>

                <div className='text'>
                    <input name="titre" type="text" placeholder="Ajouter un titre" />
                    <input name="Desc" type="text" placeholder="Description" />
                    <input name="Date" type="month" placeholder="Entrer le mois" />
                </div>

                <div className='clarif'>
                    <h4>Choissisez une image/capture écran</h4>
                    <input name="img" type="file" accept="image/*"/>
                    <h4>Lien pour dépot Gituhub</h4>
                    <input name="lien" type="text" placeholder="Entrer le lien" />
                </div>

                  <button type="submit">Ajouter nouveau projet</button>
            </form>
        

        
        </>
    )

}

export default ProjectForm