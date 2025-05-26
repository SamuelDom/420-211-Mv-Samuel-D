import { useEffect } from "react"
import { useState } from "react"
import './Interest.css'
import under from '../Assets/under.png'
import { useContext } from "react";
import { UserContext } from "../Components/TrackUser"; 
import { Navigate } from "react-router-dom";

function Interest(){

   const { user } = useContext(UserContext);
    if (!user) return <Navigate to="/" />;

    const [tvData, setTvData] = useState([]);
    const [index, setIndex] = useState(0);
   

      useEffect(() => {
        fetch("https://api.tvmaze.com/shows/1/cast")
          .then(res => res.json())
          .then(data => setTvData(data));
        }, []);

         function Before(){
           if(index > 0){
            setIndex(index - 1)
           }
        }
        
         function Next(){
          if(index < tvData.length - 1){
            setIndex(index + 1)
           }
        }

        function Random(){
          if (tvData.length > 0) {
              const randomactor = Math.floor(Math.random() * tvData.length);
              setIndex(randomactor);
            }
      }
     

    return(
        <>
          <div className="interface" style={{ backgroundImage: `url(${under})` }}>

        <h2>Under The Dome - Actors</h2>
        


       <button onClick={Before} className="Previous">Previous Actor</button>
       <button onClick={Next} className="Next">Next Actor</button>
       <button onClick={Random} className="Random">Random Actor</button>

      <div className="acteurdesc">
       {tvData.length > 0 && (
                <div className="Acteur">
                      <img 
                          src={tvData[index].person.image?.medium || 'https://via.placeholder.com/150'} 
                          alt={tvData[index].person.name} 
                      />
                      <div className="details">
                      <p><strong>Nom:</strong> {tvData[index].person.name}</p>
                      <p><strong>Genre:</strong> {tvData[index].person.gender}</p>
                      <p><strong>Date de naissance:</strong> {tvData[index].person.birthday || 'Inconnue'}</p>
                      <p><strong>Date de décès:</strong> {tvData[index].person.deathday || 'Toujours en vie'}</p>
                      <p><strong>Pays:</strong> {tvData[index].person.country?.name || 'Inconnu'}</p>
                      </div>
              </div>
              
                
            )}
            </div>
            </div>
       </>

    );
 
}
 
export default Interest
 
