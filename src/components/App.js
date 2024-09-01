import './App.css';
import NavBar from './NavBar';
import './App.css';
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  // creating state for logged in user. state will be updated when user logs in successfully
  const [currentUser, setCurrentUser] = useState(null);
  /*
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(r => r.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error(error));
  }, []);
  */
  // creating state for whether or not user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //login function that will be passed as context to routes for when user is logged in 
  const login = (user) => {
    setCurrentUser({
      username: user.username,
      blogIDs: user.blogIDs,
      userId: user.id,
    });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  //if user is not logged in/logged out, then redirect to login page
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    } else { 
      navigate("/login")
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="App">
      {isLoggedIn ? <NavBar logout={logout} currentUser={currentUser}/> : <Navigate to="/login" />}
      <Outlet context={[login, currentUser]} />
    </div>
  );
}

export default App;
