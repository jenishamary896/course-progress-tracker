import { useState, useEffect } from "react";

function CourseNotes() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("courseNotes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = () => {
    if (note.trim() === "") return;

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);

    localStorage.setItem("courseNotes", JSON.stringify(updatedNotes));

    setNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);

    localStorage.setItem("courseNotes", JSON.stringify(updatedNotes));
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>📝 Course Notes</h1>

      <textarea
        placeholder="Write your study notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "300px",
          height: "100px",
          padding: "10px",
          marginBottom: "20px"
        }}
      />

      <br />

      <button onClick={addNote}>
        Save Note
      </button>

      <div style={{ marginTop: "30px" }}>
        {notes.map((n, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px"
            }}
          >
            <p>{n}</p>

            <button onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CourseNotes;