import { NavLink } from "react-router-dom";

function NavBar({logout}) {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink> |
        <NavLink to="/about" className="nav-link">About</NavLink> |
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <button onClick={logout}>Logout</button>
    </nav>
  )
} 

export default NavBar;