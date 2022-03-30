import React, { useState, useEffect } from "react";

export default function InputArea(props) {
  const [isUpdate, setIsUpdate] = [...props.checkUpdate];
  const [updateNote, setUpdateNote] = [...props.changeNote];
  const [inputText, setInputText] = useState({
    id: "",
    title: "",
    content: "",
    completed: false,
  });

  function handleUpdate(e) {
    const { name, value } = e.target;
    setUpdateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(e) {
    const { name, value } = e.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return !isUpdate ? (
    <form className="input-area">
      <input
        onChange={addNote}
        name="title"
        placeholder="Title"
        type="text"
        value={inputText.title}
      />
      <input
        onChange={addNote}
        name="content"
        placeholder="Write note"
        type="text"
        value={inputText.content}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.onAdd(inputText);
          setInputText({
            id: "",
            title: "",
            content: "",
            completed: false,
          });
        }}
        className="add-button"
      >
        <span>Add</span>
      </button>
    </form>
  ) : (
    <form className="input-area">
      <input
        onChange={handleUpdate}
        name="title"
        placeholder="Title"
        type="text"
        value={updateNote.title}
      />
      <input
        onChange={handleUpdate}
        name="content"
        placeholder="Write note"
        type="text"
        value={updateNote.content}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.onUpdate(updateNote);
          setIsUpdate(false);
          setUpdateNote({
            id: "",
            title: "",
            content: "",
          });
        }}
        className="add-button"
      >
        <span>Update</span>
      </button>
    </form>
  );
}
