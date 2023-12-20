import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/notesSlice";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createNote({
        title:title,
        description,
        id: nanoid(10)
    }))
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description here"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNote;
