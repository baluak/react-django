import React from "react";
import "../styles/Note.css";
let I = "ID"

function Note({ note, onDelete }) {
  console.log("Rendering Note:", note); // Add this line to debug
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-data">{formattedDate}</p>
      <p className="note-data">ID: {note.id}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
