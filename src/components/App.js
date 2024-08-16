import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
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
      <Outlet />
    </div>
  );
}

export default App;
