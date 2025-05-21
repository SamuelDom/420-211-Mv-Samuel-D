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



function ProjectForm(){
    return(
        <>
        <h1>Formulaire d'ajout</h1>
        <div className='Formulaire'>
        
        <img src={Form} className="background-image" alt="Formulaire" />


            <form>
                <h4>Langage</h4>
             <div className='Everycard'>
          <label className="card">
            <input type="radio" name="langage" value="java" />
            <img src={java} alt="Java" />
            <span>Java</span>
          </label>

          <label className="card">
            <input type="radio" name="langage" value="python" />
            <img src={python} alt="Python" />
            <span>Python</span>
          </label>

          <label className="card">
            <input type="radio" name="langage" value="clogo" />
            <img src={clogo} alt="C" />
            <span>C</span>
          </label>

                <h4>IDE</h4>
          <label className="card">
            <input type="radio" name="langage" value="bluej" />
            <img src={bluej} alt="BlueJ" />
            <span>BlueJ</span>
          </label>

          <label className="card">
            <input type="radio" name="langage" value="jet" />
            <img src={Jet} alt="JetBrains" />
            <span>JetBrains</span>
          </label>

          <label className="card">
            <input type="radio" name="langage" value="vscode" />
            <img src={vscode} alt="VS Code" />
            <span>VS Code</span>
          </label>

            <h4>Bibliothèque/framework</h4>
          <label className="card">
            <input type="radio" name="langage" value="jquery" />
            <img src={jquery} alt="jQuery" />
            <span>jQuery</span>
          </label>

          <label className="card">
            <input type="radio" name="langage" value="react" />
            <img src={react} alt="React" />
            <span>React</span>
          </label>

          

        </div>

                <div className='text'>
                    <input name="titre" type="text" placeholder="Ajputer un titre" />
                    <input name="Desc" type="text" placeholder="Description" />
                    <input name="Date" type="month" placeholder="Entrer le mois" />
                </div>

                <div className='clarif'>
                    <h4>Choissisez une image/capture écran</h4>
                    <input name="lien" type="file" accept="image/*"/>
                    <h4>Lien pour dépot Gituhub</h4>
                    <input name="lien" type="text" placeholder="Entrer le lien" />
                </div>

                  <button type="submit">Ajouter nouveau projet</button>
            </form>
        

        </div>
        </>
    )

}

export default ProjectForm