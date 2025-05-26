import './Portfolio.css'
import Mountain from '../Assets/Mountain.webp'
import photo2 from '../Assets/photo2.png'
import Timeline from '../Components/Timeline'
import { useContext } from "react";
import { UserContext } from "../Components/TrackUser"; 
import { Navigate } from "react-router-dom";

function Portfolio({projets}){

     const { user } = useContext(UserContext);
    if (!user) return <Navigate to="/" />;

    return(
        <>
        <div className='Portfolio'>

        <img src={Mountain} className='background' />    
        <div className="perso">
            <h2 className="nom">Samuel Richard Domesca</h2>
            <img className='photo' src={photo2} /> 
            <h3>Je suis quelqu’un de ponctuel, rigoureux et fiable dans la gestion de mes projets. <br/>
                Ouvert d’esprit, j’aime apprendre, découvrir de nouvelles perspectives et nourrir ma curiosité.<br/>
                Mon approche est guidée par la logique et l’analyse, ce qui me permet de rester clairvoyant face aux défis.<br/>
                Passionné par le sport, la technologie, la photographie et la musique, je trouve dans chacun de ces domaines une source d’équilibre, <br/>
                de créativité et d’inspiration. Ce portfolio reflète mon univers, <br/>
                mes valeurs et ma manière de concevoir le travail : avec méthode, curiosité et sens du détail.</h3>
         </div>

        <div className="proffesion">

            <div className='cheminement'>
                <h3>Cheminement scolaire</h3>
                <ul>
                    <li>École Primaire: Simone Desjardins</li>
                    <li>École Secondaire: Jean Grou</li>
                    <li>Cégep Marie Victorin: Marie Victorin</li>
                </ul>
                    <h3>Formation</h3>
                        <ul>
                            <li>Formation de son et multimédia</li>
                        </ul>
            </div>

            <div className='emploie'>
                <h3>Emplois et stages</h3>
                <ul>
                    <li>Aucune expérience mentionnable pour l'instant</li>
                </ul>
                    <h3>Implications bénévoles</h3>
                        <ul>
                            <li>Bénévolat dans la donation de nourriture</li>
                            <li>Technicien de son et multimédia</li>
                        </ul>
            </div>

            <div className='expérience'>
                   <h3>Activités parascolaire</h3>
                <ul>
                    <li>Concours de robotique Lego 2018</li>
                </ul>
            </div>

        </div>
         
            <div className='Liste-projets'>
                <h2>Liste de mes projets</h2>
                <Timeline projets={projets} />
            </div>

        </div>
        </>
    )

}

export default Portfolio