import React from "react";

const NoteListItem = () => {
  return (
    // <a href="#">
    <div className="notes_list-item notes_list-item--selected">
      <div className="notes_small-title">Lecture Note</div>
      <div className="notes_small-body">I learnt nothing today</div>
      <div className="notes_small-updated">Sunday - 07/05/2022</div>
    </div>
    // </a>
  );
};

export default NoteListItem;
