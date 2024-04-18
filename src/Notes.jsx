import { useState, useEffect } from "react";
import axios from "axios";

import Note from "./Note";
import AddNoteForm from "./AddNoteForm";

const baseUrl = 'http://localhost:3001/api/notes'

const Notes = () => {
    const [notes, setNotes] = useState([
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            important: true,
            date: new Date().toISOString(),
            id: "1"
        },
        {
            content: "Loading notes...",
            important: false,
            date: new Date().toISOString(),
            id: "2"
        },
        {
            content: "Loading notes...",
            important: false,
            date: new Date().toISOString(),
            id: "3"
        }
    ]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
          <h1>Notes</h1>

        <AddNoteForm notes={notes} setNotes={setNotes} />

          <ul style={{
                padding: 0,
                listStyle: "none",
                margin: 0,
                display: "flex",
                flexDirection: "row",
                gap: "1.5rem",
                alignItems: "center",
                justifyContent: "center"
          }}>
            {notes.map((note) => (
                <Note key={note.id} noteId={note.id} noteContent={note.content} />
            ))}
        </ul>
    </div>
  );
};

export default Notes;
