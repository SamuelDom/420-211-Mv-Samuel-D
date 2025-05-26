import { useContext } from "react";
import "./Header.css";
import { UserContext } from "./TrackUser";

function Header(){

    const {user} = useContext(UserContext)
    return(
        <header className="header">
            {user ? <h2>Connecté en tant que {user}</h2> : <h2>Non connecté</h2>}
        </header>
    )
}

export default Header;