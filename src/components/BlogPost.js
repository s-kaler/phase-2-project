import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BlogPost() {
  //blog post is displayed as data fetched with link to author's profile
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    userId: "",
    content: "",
  });
  const params = useParams();
  const blogId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${blogId}`)
      .then(r => r.json())
      .then(data => setBlog(data))
      .catch(error => console.error(error));
  }, [blogId]);

  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-author">by {blog.author} </p>
      {blog.userId !== "" ?
        <Link className="blog-author" to={`/profile/${blog.userId}`}>View Profile</Link>
        :
        <></>
      }
      <p className="blog-content">{blog.content}</p>
    </div>
  );
}

export default BlogPost;