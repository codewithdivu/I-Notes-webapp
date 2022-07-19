import React from "react";

const NoteListItem = ({ note, index, handleIndex, selectedIndex }) => {
  const { title, text, date } = note;

  const handleItem = () => {
    // console.log("index :>> ", index);
    handleIndex(index);
  };

  return (
    <div
      onClick={handleItem}
      className={
        selectedIndex === index
          ? " notes_list-item--selected"
          : "notes_list-item"
      }
    >
      <div className="notes_small-title">{title || "Title"} </div>
      <div className="notes_small-body">
        {text.length > 50
          ? text.substring(0, 50) + "..."
          : text + "..." || "Description"}
      </div>
      <div className="notes_small-updated">{date || "date"}</div>
    </div>
  );
};

export default NoteListItem;
