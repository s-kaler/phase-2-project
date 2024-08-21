import React, { useState, useEffect } from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log("Params:", params);
  
  return (
    <div>
      <h1>Profile Page</h1>
      
    </div>
  )
}

export default Profile;