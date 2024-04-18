import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const baseUrl = 'http://localhost:3001/api/notes'

const AddNoteForm = (
    { notes, setNotes }
) => {
    const [newNote, setNewNote] = useState("");

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
          content: newNote,
          important: Math.random() < 0.5,
          date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
        };

        axios
          .post(baseUrl, noteObject)
          .then((response) => {
            setNotes(notes.concat(response.data))
            setNewNote("");
          });
      };

    return (
        <form onSubmit={addNote} style={{
            margin: "20px",
            display: "flex",
            alignItems: "center"
        }}>
            <input value={newNote} onChange={handleNoteChange} style={{
                padding: "5px",
                marginRight: "10px",
            }} />
            <button type="submit" style={{
                marginLeft: "10px",
                padding: "5px",
                backgroundColor: "lightblue",
                color: "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}>save</button>
        </form>
    )
};

AddNoteForm.propTypes = {
    notes: PropTypes.array.isRequired,
    setNotes: PropTypes.func.isRequired
};

export default AddNoteForm;
