import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Profile() {
  //user profile for user searched for in params displayed, regardless of current logged in user
  const params = useParams();
  //console.log("Params:", params.id);
  const [user, setUser] = useState({
    username: "",
    id: "",
    blogIDs: []
  })
  const [blogs, setBlogs] = useState([])

  //user profile is fetched according to params passed in url
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
      //fetched user has an array of blog IDs, so data for each blog is returned
      if(data.blogIDs) {
        data.blogIDs.forEach(blogID => {
          console.log(blogID)
          fetch(`http://localhost:4000/blogs/${blogID}`)
            .then(r => r.json())
            .then(data => {
              //console.log(data)
              setBlogs(blogs => [...blogs, data])
            })
        })
      }
     //console.log(data)
    })
  }, [params.id])

  //blogs for current user profile are displayed with links to each blog
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
    <div className="profile-container">
      <h1>{user.username}'s Blogs</h1>
        {blogList}
    </div>
  )
}

export default Profile;