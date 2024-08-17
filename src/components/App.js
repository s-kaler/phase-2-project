import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(r => r.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error(error));
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    } else { 
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="App">
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={[login, blogPosts]}/>
    </div>
  );
}

export default App;
