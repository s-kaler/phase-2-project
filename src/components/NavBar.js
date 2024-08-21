import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({currentUser, logout}) {
  const profileLink = `/profile/${currentUser.userId}`;
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        {" "}
        <NavLink to={profileLink} className="nav-link">Profile</NavLink>
        {" "}
        <NavLink to="/newBlog" className="nav-link">New Blog</NavLink>
        <button onClick={logout} className="logout">Logout</button>
    </nav>
  )
}

export default NavBar;