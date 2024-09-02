import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewBlog({ currentUser, addBlogPost }) {
  // create new blog post page. takes context of current user to save blog post id to the current user's profile
  //const [login, currentUser] = useOutletContext();
  const [newButtonPressed, setNewButtonPressed] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    blogBody: "",
  author: currentUser.username,
  });
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorFlag, setError] = useState("");

  //console.log("Logged in as:", currentUser);
  function handleChange(e){
    setFormData({
     ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    //console.log(e)
    // handles submission for new blog entry. form cannot be submitted after first submission
    // 
    e.preventDefault();
    if (formData.title === "" || formData.blogBody === "" || formData.author === "") {
      //form will be not be subimitted unless title and body are written
      setError("Please fill in all fields.");
      return;
    }
    else {
      //e.reset();
      // post new blog entry to database and then with new generated ID, update user's own blogID array to have reference
      setSubmitted(true);
      addBlogPost(formData)
    }
  }

  return (
    <div className="new-blog">
      {
        !newButtonPressed ?
        <button onClick={() => setNewButtonPressed(true)}>Write New Blog Post</button>
        :
        <>
          <h2>Write New Blog Post</h2>
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
              <input id="username" type="text" name="author" onChange={handleChange}/>
            </div>
            <input type="submit" value={isSubmitted ? "Submitted" : "Submit"} disabled={isSubmitted}/>
          </form>
          <p id="errors">{errorFlag}</p>
        </>
      }
    </div>
  )
}

export default NewBlog;