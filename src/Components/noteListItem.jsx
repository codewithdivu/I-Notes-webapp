import React from "react";

const NoteListItem = ({ note, index, handleIndex }) => {
  const { title, text, date } = note;

  const handleItem = () => {
    // console.log("index :>> ", index);
    handleIndex(index);
  };

  return (
    <div
      onClick={handleItem}
      className="notes_list-item notes_list-item--selected"
    >
      <div className="notes_small-title">{title || "Title"} </div>
      <div className="notes_small-body">{text || "Description"}</div>
      <div className="notes_small-updated">{date || "date"}</div>
    </div>
  );
};

export default NoteListItem;
