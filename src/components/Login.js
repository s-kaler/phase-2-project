import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";


function Login() {
  const [users, setUsers] = useState([]);
  const [login, currentUser] = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorFlag, setError] = useState("");

  // Access the login function passed as context
  useEffect(() => {
  fetch("http://localhost:4000/users/")
    .then(r => r.json())
    .then(data => {setUsers(data)})
  }, [])

 
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create a function that calls the login function when the form is submitted
  function handleLogin(e) {
    e.preventDefault();
    //console.log(e.target.username.value);
    // Check if the user exists in the users array
    const user = users.find(user => user.username === formData.username);
    if (user && user.password === formData.password) {
      console.log("Login successful!");
      // Call the login function with the user object
      login(user);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <> 
      <form onSubmit={handleLogin}>
        <p id="errors">{errorFlag}</p>
        <label htmlFor="username">Username</label>
        <div>
          <input
            id="username"
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">
        <button type="submit">Sign Up</button>
      </Link>
      <p>{}</p>
    </>
    
    
  );
};

export default Login;