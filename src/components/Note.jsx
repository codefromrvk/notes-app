import React from "react";

export default function Note(props) {
  const { id, title, completed, content, onDelete, update, onNoteClick } = {
    ...props,
  };
  return (
    <div
      id="parent"
      onClick={(e) => onNoteClick(e, { id, title, content, completed })}
      style={
        completed
          ? { backgroundColor: "#f5ba13" }
          : { backgroundColor: "white" }
      }
      className="note"
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            update({ id, title, content, completed });
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
