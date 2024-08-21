import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewBlog() {
  function handleChange(e){

  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Create New Blog</h1>
      <form>
        <label htmlFor="title">Title</label>
        <div>
          <input id="title" type="text" name="title" onChange={handleChange} />
        </div>
        <label htmlFor="blogBody">Body</label>
        <div>
          <textarea id="blogBody"  name="blogBody" className="body-input" wrap="soft" onChange={handleChange} />
        </div>
        <input type="submit" text="submit" onSubmit={handleSubmit}/>
      </form>
    </div>
  )
}

export default NewBlog;