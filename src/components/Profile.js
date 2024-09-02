import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import NewBlog from "./NewBlog";

function Profile() {
  //user profile for user searched for in params displayed, regardless of current logged in user
  const params = useParams();
  //console.log("Params:", params.id);
  const [profileUser, setUser] = useState({
    username: "",
    userId: "",
    blogIDs: []
  })
  const [blogs, setBlogs] = useState([])
  const [newButtonPressed, setNewButtonPressed] = useState(false);
  const [login, currentUser] = useOutletContext();
  const [isUserSameAsCurrent, setUserSameAsCurrent] = useState(false);

  //user profile is fetched according to params passed in url
  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}`)
    .then(r => r.json())
    .then((data) => {
      setUser({
        username: data.username,
        blogIDs: data.blogIDs,
        userId: data.id
      })
      //console.log(data.blogIDs)
      //fetched user has an array of blog IDs, so data for each blog is returned
      if(data.blogIDs) {
        data.blogIDs.forEach(blogID => {
          //console.log(blogID)
          fetch(`http://localhost:4000/blogs/${blogID}`)
            .then(r => r.json())
            .then(data => {
              //console.log(data)
              setBlogs(blogs => [...blogs, data])
            })
        })
      }
      //console.log(data)
      //console.log("param user:", profileUser)
      //console.log("logged in user:", currentUser)
      
      if(data.id === currentUser.userId) {
        setUserSameAsCurrent(true)
      }
      
    })
  }, [params.id])

  //blogs for current user profile are displayed with links to each blog
  const blogList = blogs.map(post => {
    //console.log(post)
    return (
      <article className="blog-post" key={post.id}>
        <p>
          Blog Post: <Link to={`/blogs/${post.id}`}> {post.title}</Link>
        </p>
      </article>
    )
  })

  function addBlogPost(formData) {
    console.log(formData);
    
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.blogBody,
        author: formData.author,
        userId: currentUser.userId
      })
    })
    .then(r => r.json())
    .then(fetchedData => {
      console.log(fetchedData.id)
      setBlogs([...blogs, fetchedData])
      fetch(`http://localhost:4000/users/${currentUser.userId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blogIDs: currentUser.blogIDs
        }),
      })
    })
    
  }

  return (
    <div className="profile-container">
      <h1>{profileUser.username}'s Blogs</h1>
      {blogList}
      <br></br>
      {
        !isUserSameAsCurrent ? <></> : <NewBlog currentUser={currentUser} addBlogPost={addBlogPost} />
      }
    </div>
  )
}

export default Profile;