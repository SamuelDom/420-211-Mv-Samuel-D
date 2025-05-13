import './Home.css'
import Sakura from '../Assets/Sakura.mp4'
 
function Home(){
    return(
        <>
        <div className='home'>
        <div className='overlay'></div>
        <video src={Sakura} autoPlay loop muted />
        <div className='text'>
            <h1>Welcome to my website!</h1>
             <form /*onSubmit={}*/ className="form">
            <input name="user" type="text" placeholder="Username" />
            <input name="email" type="email" placeholder="user@email.com" />
            <button>S'inscrire</button>
            </form>
        </div>
        </div>
        </>
    )
}
 
export default Home