import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BlogPost() {
  const [blog, setBlog] = useState({});
  const params = useParams();
  const blogId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${blogId}`)
      .then(r => r.json())
      .then(data => setBlog(data))
      .catch(error => console.error(error));
  }, [blogId]);

  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <p>by {blog.author}</p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;