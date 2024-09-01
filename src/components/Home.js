import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Home() {
  //creating state for fetched blog posts to be displayed on the homepage
  const [blogPosts, setBlogPosts] = useState([]);
  function addBlogPosts(fetchedBlogs) {
    setBlogPosts(fetchedBlogs)
    console.log(fetchedBlogs)  
  }
  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(r => r.json())
      .then(data => addBlogPosts(data))
      .catch(error => console.error(error));
  }, []);
  //context from login to keep track of current logged in user without having to fetch again
  const [login, currentUser] = useOutletContext();
  //console.log(blogs);
  console.log("Logged in as:", currentUser);
  //fetched blog posts are displayed with links to individual post pages
  const blogList = blogPosts.map(post => (
    <article className="blog-post" key={post.id}>
      <p>
        <Link to={`/blogs/${post.id}`}>{post.title}</ Link>
      </p>
      <p>by {post.author}</p>
    </article>
  ))

  return (
      <main className="home">
        <div className="home-div">
          <h1>Blog Posts</h1>
          {blogList}
        </div>
      </main >
  );
}

export default Home;
