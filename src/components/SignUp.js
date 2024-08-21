import React, { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: ""});
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then(r => r.json())
      .then(data => { setUsers(data) })
  }, [])


  // Create a function that handles form submission and sends user data to the server
  function handleSignUp(e) {
    e.preventDefault();
    if (formData.username === "" || formData.password === "" || formData.confirmPassword === "") {
      console.log("Please fill in all fields.");
      return; 
    }
    if (users.find(user => user.username === formData.username))
    {
      console.log("Username already exists.");
      return;
    }
    if (formData.password === formData.confirmPassword) {
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
          blogs: []
          }),
      })
    } else {
      console.log("Passwords do not match.");
    }
    setFormData({
      username: "", password: "", confirmPassword: "" });
    // Navigate to the login page
    navigate("/login");
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSignUp}>
      <label htmlFor="username">Username</label>
      <div>
        <input id="username" type="text" name="username" onChange={handleChange}/>
      </div>
      {/*
      <label htmlFor="email">Email</label>
      <div>
        <input id="email" type="email" name="email" />
      </div>
      */}
      <label htmlFor="password">Password</label>
      <div>
        <input id="password" type="password" name="password" onChange={handleChange} />
      </div>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <div>
        <input id="confirmPassword" type="password" name="confirmPassword" onChange={handleChange} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp;