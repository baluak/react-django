import React, { useState } from "react";
import api from "../api/";
import Navigation from "./Navigate";
import "../styles/fetch.css";

function Fetch() {
  const [id, setId] = useState(""); // To store the input ID
  const [note, setNote] = useState(null); // To store the fetched note
  const [error, setError] = useState(""); // To display error messages
  const [successMessage, setSuccessMessage] = useState(""); // To display success messages

  const fetchNoteById = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setNote(null); // Clear previous note data
    setSuccessMessage(""); // Clear previous success messages

    if (!id) {
      setError("Please enter a valid ID.");
      return;
    }

    api
      .get(`/api/notes/${id}/`) // Ensure this matches the new URL pattern
      .then((res) => setNote(res.data)) // Set the fetched note
      .catch((err) =>
        setError("Failed to fetch note. Ensure the ID is correct.")
      );
  };

  const deleteNoteById = () => {
    if (!note) {
      setError("No note selected for deletion.");
      return;
    }

    api
      .delete(`/api/notes/delete/${note.id}/`) // Adjust this URL as needed based on your backend setup
      .then(() => {
        setSuccessMessage("Note deleted successfully.");
        setNote(null); // Clear the note after deletion
        setId(""); // Clear the input field
      })
      .catch((err) =>
        setError("Failed to delete note. Please try again.")
      );
  };

  return (
    <div className="fetch">
      <Navigation />
      <br />
      <h2>Fetch Note by ID</h2>
      <form onSubmit={fetchNoteById}>
        <label style={{ marginBottom: "-2em" }} htmlFor="note-id">
          {" "}
          <h3> Enter Note ID:</h3>
        </label>
        <br />
        <input
          style={{
            margin: "0.3em 0 0.4em 0",
            width: "12em",
            height: "2em",
            marginTop: "0",
            marginBottom: "1em",
          }}
          type="number"
          id="note-id"
          name="note-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <button type="submit">Fetch Note</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {note && (
        <div>
          <h3>Note Details:</h3>
          <p>
            <strong>Title:</strong> {note.title}
          </p>
          <p>
            <strong>Content:</strong> {note.content}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(note.created_at).toLocaleString()}
          </p>
          <button onClick={deleteNoteById} style={{ color: "red" }}>
            Delete Note
          </button>
        </div>
      )}
    </div>
  );
}

export default Fetch;