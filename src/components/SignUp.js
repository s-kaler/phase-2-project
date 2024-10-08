import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  // signup form for new users, will be posted to the database when form is submitted
  // has a link to go back to login screen if already signed up
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: ""});
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errorFlag, setError] = useState("")
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then(r => r.json())
      .then(data => { setUsers(data) })
  }, [])


  // Create a function that handles form submission and sends user data to the server
  function handleSignUp(e) {
    e.preventDefault();
    // conditional GET request based on whether or not provided form data is valid
    if (formData.username === "" || formData.password === "" || formData.confirmPassword === "") {
      setError("Please fill in all fields.");
      return; 
    }
    if (users.find(user => user.username === formData.username))
    {
      setError("Username already exists.");
      return;
    }
    if (formData.password !== formData.confirmPassword)
    {
      setError("Passwords do not match.");
      return;
    }
    else if (formData.password === formData.confirmPassword) {
      // Send user data to the server
      console.log("User signed up successfully!");
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          blogIDs: []
          }),
      })
      setIsSignedUp(true);
    }
    // state change to default state after sign up  process
    setFormData({
      username: "", password: "", confirmPassword: "" });
    // Navigate to the login page
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }
  // update state with new data from form as it is being written
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    //console.log(formData);
  };

  return (
    <div className="login-form">
      {isSignedUp ? 
      <p>You have successfully signed up! Redirecting.</p>
      :
      <form onSubmit={handleSignUp}>
        <p id="errors">{errorFlag}</p>
        <label htmlFor="username">Enter New Username</label>
        <div>
          <input id="username" type="text" name="username" onChange={handleChange} />
        </div>
        {/*
        <label htmlFor="email">Email</label>
        <div>
          <input id="email" type="email" name="email" />
        </div>
        */}
        <label htmlFor="password">Enter New Password</label>
        <div>
          <input id="password" type="password" name="password" onChange={handleChange} />
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div>
          <input id="confirmPassword" type="password" name="confirmPassword" onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
        <br></br>
        <Link to="/login">Back To Login</Link>
        </form>
      }
    </div>
  )
}

export default SignUp;