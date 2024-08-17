import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({logout}) {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        {" "}
        <button onClick={logout} className="logout">Logout</button>
    </nav>
  )
} 

export default NavBar;