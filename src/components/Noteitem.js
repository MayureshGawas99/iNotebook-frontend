import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { AlertContext } from "../context/notes/alertContext";

export default function Noteitem(props) {
  const { showAlert } = useContext(AlertContext);

  const getDateTime = (word) => {
    let date = word.substring(0, 10);
    let time = word.substring(11, 19);
    return `${date}, ${time}`;
  };
  const { note, updateNote } = props;
  const { deleteNote } = useContext(NoteContext);
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <hr />
          <div
            className="date text-secondary d-flex justify-content-between"
            style={{ fontSize: "12px" }}
          >
            <p>{getDateTime(note.date)}</p>
            <div className="icons">
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert("Deleted Succesfully", "success");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
