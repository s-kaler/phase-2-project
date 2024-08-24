import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log("Params:", params.id);
  const [user, setUser] = useState({
    username: "",
    id: "",
    blogIDs: []
  })
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}`)
    .then(r => r.json())
    .then((data) => {
      setUser({
        username: data.username,
        blogIDs: data.blogIDs,
        id: data.id
      })
      console.log(data.blogIDs)
      data.blogIDs.forEach(blog => {
        fetch(`http://localhost:4000/blogs/${blog}`)
      });
     console.log(data)
    })
  }, [])

  const blogList = user.blogIDs.map(post => (
    <article className="blog-post" key={post}>
      <p>
        <Link to={`/blogs/${post}`}> Blog Post {post}</ Link>
      </p>
    </article>
  ))

  return (
    <div>
      <h1>{user.username}'s Blogs</h1>
        {blogList}
    </div>
  )
}

export default Profile;