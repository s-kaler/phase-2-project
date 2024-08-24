import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewBlog() {

  const [login, currentUser] = useOutletContext();
  const [formData, setFormData] = useState({
    title: "",
    blogBody: "",
  author: currentUser.username,
  });
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorFlag, setError] = useState("");

  console.log("Logged in as:", currentUser);
  function handleChange(e){
    setFormData({
     ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    console.log(e)
    e.preventDefault();
    if (formData.title === "" || formData.blogBody === "") {
      setError("Please fill in all fields.");
      return;
    }
    else {
      //e.reset();
      setSubmitted(true);
      console.log("User signed up successfully!");
      fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formData.title,
          content: formData.blogBody,
          author: formData.author,
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log(data.id)
        currentUser.blogIDs.push(data.id);
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
  }

  return (
    <div>
      <h1>Write New Blog</h1>
      <p id="errors">{errorFlag}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <div>
          <input id="title" type="text" name="title" onChange={handleChange} />
        </div>
        <label htmlFor="blogBody">Body</label>
        <div>
          <textarea id="blogBody"  name="blogBody" className="body-input" wrap="soft" onChange={handleChange} />
        </div>
        <label htmlFor="author">Author</label>
        <div>
          <input id="username" type="text" name="author" onChange={handleChange} placeholder={formData.author}/>
        </div>
        <input type="submit" value={isSubmitted ? "Submitted" : "Submit"} disabled={isSubmitted}/>
      </form>
    </div>
  )
}

export default NewBlog;