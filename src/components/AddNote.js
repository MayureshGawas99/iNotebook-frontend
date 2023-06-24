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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note.title, note.description, note.tag);
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
    <>
      <div className="" style={{ marginTop: "0px" }}>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-sm-8">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-2 text-primary">
                  <b> Add a Note</b>
                </h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="d-grid">
                    <button
                      // disabled={
                      //   note.title.length < 5 || note.description.length < 5
                      // }
                      type="submit"
                      // onClick={handleClick}
                      className="btn btn-primary"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
