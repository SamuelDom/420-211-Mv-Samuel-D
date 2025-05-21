import './Portfolio.css'
import Mountain from '../Assets/Mountain.webp'
import photo2 from '../Assets/photo2.png'

function Portfolio(){
    return(
        <>
        <div className='Portfolio'>

        <img src={Mountain} />    
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

         
        </div>










        </>
    )

}

export default Portfolio