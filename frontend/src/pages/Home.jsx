import { useState, useEffect } from "react";
import api from "../api/";
import Note from "../components/Note";
import "../styles/Navigate.css";

import Navigation from "./Navigate";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api.get(`/api/notes/`)


      .then((res) => {
        console.log("API Response:", res.data); // Ensure the full title is returned
        setNotes(res.data);
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

  return (
    <div className="contdiv">
      <Navigation />
      <br />
      <div className="next">
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
