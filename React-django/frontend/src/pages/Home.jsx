import { useState, useEffect } from "react";
import api from "../api/"; // Corrected import path
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note Deleted!");
        else {
          alert("Failed to delete note.");
        }
      })
      .catch((error) => alert(error));
    getNotes();
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content }) // Sending "title" and "content"
      .then((res) => {
        if (res.status === 201) {
          alert("Note Created!");
          setNotes([...notes, res.data]); // Add new note to the list without fetching all notes again
        } else {
          alert("Failed to create note.");
        }
      })
      .catch((err) => alert(err));

    // Clear both title and content fields after successful submission
    setTitle("");
    setContent(""); // This will reset the content field as well
  };

  return (
    <div>
      <div>
        <h2>Notes:</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>

      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <div>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <br />
        <label htmlFor="content">Content:</label>
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

export default Home;
