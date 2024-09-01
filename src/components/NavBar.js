import { NavLink } from "react-router-dom";

function NavBar({currentUser, logout}) {
  //creating link to user's profile page
  const profileLink = `/profile/${currentUser.userId}`;
  //navigation bar includes links to homepage, logged in user's profile, and page to write a new blog post
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