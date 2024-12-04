import { useState } from "react";
import api from "../api/";
import Navigation from "./Navigate";
import "../styles/create.css"

function Create() {
  // State for the title and content of the note
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 const createNote = (e) => {
  e.preventDefault();
  console.log("Title:", title, "Content:", content);
  api
    .post("/api/notes/", { title, content })
    .then((res) => {
      if (res.status === 201) {
        alert("Note Created!");
      } else {
        alert("Failed to create note.");
      }
    })
    .catch((err) => alert(err));
  setTitle("");
  setContent("");
};

  


  return (
    <div className="posttoapi">
      <Navigation />
      <br />
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label  htmlFor="title">Title:</label>
        <br />
        <div className="tit">
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)} // Ensure this updates the entire value
            value={title}
          />
        </div>
        <br />
        <label className="con" htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Create;
