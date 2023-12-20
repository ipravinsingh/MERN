import React, { useState } from "react";
import SinghlNote from "./SinghlNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNotes] = useState("");

  // // Change in Object Example__
  //   const [car, setCar] = useState({
  //     color: "Red",
  //     brand: "innova",
  //     year: "2002",
  //   });
  //   setCar({ ...car, color: "blue" });

  function addNote() {
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }
  const ulStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setCurNotes(event.target.value);
        }} 
      />
      <br />
      <br />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SinghlNote note={note} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notes;
