import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import { AlertContext } from "../context/notes/alertContext";

export default function AddNote() {
  const { addNote } = useContext(NoteContext);
  const { showAlert } = useContext(AlertContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    showAlert("Added Succesfully", "success");
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            value={note.description}
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            className="form-control"
            id="tag"
            name="tag"
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          onClick={handleClick}
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
}
