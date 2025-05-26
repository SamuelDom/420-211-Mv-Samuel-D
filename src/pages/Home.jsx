import './Home.css';
import Sakura from '../Assets/Sakura.mp4';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Components/TrackUser';

function Home() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const { user: compte, setUser: setCompte } = useContext(UserContext);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users") || "[]");
    setAllUsers(saved);
  }, [compte]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.trim()) return;

    const comptes = JSON.parse(localStorage.getItem("users") || "[]");
    if (comptes.includes(user)) {
      alert("Nom d'utilisateur déjà pris!");
      return;
    }

    setCompte(user);
  };

  const handleSignOut = () => {
    setCompte("");
  };

  return (
    <div className="home-container">
      <div className='home-left'>
        <div className='overlay'></div>
        <video src={Sakura} autoPlay loop muted />
        <div className='text'>
          <h1>Welcome to my website!</h1>
          {!compte ? (
            <form onSubmit={handleSubmit} className="form">
              <input
                name="user"
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                name="email"
                type="email"
                placeholder="user@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>S'inscrire</button>
            </form>
          ) : (
            <div>
              <p>Connecté en tant que <strong>{compte}</strong></p>
              <button onClick={handleSignOut}>Se déconnecter</button>
            </div>
          )}
        </div>
      </div>

      <div className="home-right">
        <h2>Anciens visiteurs du site ({allUsers.length}) :</h2>
        <ul>
          {allUsers.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
