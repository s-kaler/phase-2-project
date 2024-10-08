import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";


function Login() {
  // login form for existing users
  // has a link to navigate to signup page for new users
  // users will be redirected to login page if they are not already logged in
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
  // could altenatively 
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
    <div className="login-form"> 
    <h1>Please log in to start blogging!</h1>
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
      <br></br>
      <Link to="/signup">
        <button type="submit">Sign Up</button>
      </Link>
      <p>{}</p>
    </div>
  );
};

export default Login;