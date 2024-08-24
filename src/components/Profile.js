import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Profile() {
  const params = useParams();
  //console.log("Params:", params.id);
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
      //console.log(data.blogIDs)
      data.blogIDs.forEach(blogID => {
        console.log(blogID)
        fetch(`http://localhost:4000/blogs/${blogID}`)
        .then(r => r.json())
        .then(data => {
          //console.log(data)
          setBlogs(blogs => [...blogs, data]) 
        })
      })
     //console.log(data)
    })
  }, [])

  const blogList = blogs.map(post => {
    console.log(post)
    return (
      <article className="blog-post" key={post.id}>
        <p>
          Blog Post: <Link to={`/blogs/${post.id}`}> {post.title}</Link>
        </p>
      </article>
    )
  })

  return (
    <div>
      <h1>{user.username}'s Blogs</h1>
        {blogList}
    </div>
  )
}

export default Profile;