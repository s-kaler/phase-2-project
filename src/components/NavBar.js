import { NavLink } from "react-router-dom";

function NavBar({currentUser, logout}) {
  const profileLink = `/profile/${currentUser.userId}`;
  return (
    <nav className="navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        {" "}
        <NavLink to={profileLink} className="nav-link">Profile</NavLink>
        {" "}
        <NavLink to="/newblog" className="nav-link">New Blog</NavLink>
        <button onClick={logout} className="logout">Logout</button>
    </nav>
  )
}

export default NavBar;