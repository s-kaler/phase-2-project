import React, { useState, useEffect } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";

function Home() {
  const [login, blogs, currentUser] = useOutletContext();
  //console.log(blogs);
  console.log("Logged in as:", currentUser);

  const blogList = blogs.map(post => (
    <article className="blog-post" key={post.id}>
      <p>
        <Link to={`/blogs/${post.id}`}>{post.title}</ Link>
      </p>
      <p>by {post.author}</p>
    </article>
  ))

  return (
      <main>
        <div className="home-div">
          <h1>Blog Posts</h1>
          {blogList}
        </div>
      </main >
  );
}

export default Home;
