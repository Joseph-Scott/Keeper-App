import React, { useState } from "react";

function Note(props) {
  const [noteTitle, setNoteTitle] = useState("");

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;