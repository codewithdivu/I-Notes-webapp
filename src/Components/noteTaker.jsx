import React, { useState } from "react";
import NoteListItem from "./noteListItem";
import "../css/noteTaker.css";

const NoteTaker = () => {
  const [noteData, setnoteData] = useState([
    {
      title: "",
      text: "",
      date: "",
    },
  ]);

  const [title, setTitle] = useState("");
  const [textArea, settextArea] = useState("");
  const [saveIndex, setsaveIndex] = useState("");

  const handleAddNote = () => {
    setnoteData([
      ...noteData,
      {
        title: "",
        text: "",
        date: "",
      },
    ]);
  };

  const handleIndex = (id) => {
    // console.log("index :>> ", id);
    const obj = noteData.find((value, index) => index === id);
    setTitle(obj.title);
    settextArea(obj.text);
    setsaveIndex(id);
    // console.log("obj :>> ", obj);
  };

  const handleSave = () => {
    let arr = [...noteData];

    arr = arr.map((obj, index) => {
      if (index === saveIndex) {
        return {
          ...obj,
          title: title,
          text: textArea,
          date: new Date().toLocaleString(),
        };
      } else {
        return obj;
      }
    });
    console.log("ldodod", arr);
    setnoteData(arr);
  };

  return (
    <div className="notes" id="app">
      <div className="notes_slider">
        <button onClick={handleAddNote} className="notes_add" type="button">
          Add Note
        </button>
        <div className="notes_list">
          {noteData &&
            noteData.length > 0 &&
            noteData?.map((note, index) => (
              <NoteListItem
                key={index}
                index={index}
                handleIndex={handleIndex}
                note={note}
              />
            ))}
        </div>
      </div>
      <div className="notes_preview">
        <input
          className="notes_title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a Title..."
        />
        <textarea
          className="notes_body"
          value={textArea}
          onChange={(e) => settextArea(e.target.value)}
          placeholder="Write your note here............"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default NoteTaker;
