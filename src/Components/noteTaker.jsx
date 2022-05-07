import React from "react";
import NoteListItem from "./noteListItem";
import "../css/noteTaker.css";

const NoteTaker = () => {
  return (
    <div className="notes" id="app">
      <div className="notes_slider">
        <button className="notes_add" type="button">
          Add Note
        </button>
        <div className="notes_list">
          <NoteListItem />
        </div>
      </div>
      <div className="notes_preview">
        <input
          className="notes_title"
          type="text"
          placeholder="Enter a Title..."
        />
        <textarea className="notes_body">Write here something.....</textarea>
      </div>
    </div>
  );
};

export default NoteTaker;
