import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "./Footer";
import { Header } from "./Header";
import Note from "./Note";
import InputArea from "./InputArea";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateNote, setUpdateNote] = useState({
    id: "",
    title: "",
    content: "",
    completed: false,
  });

  const checkUpdate = [isUpdate, setIsUpdate];
  const changeNote = [updateNote, setUpdateNote];

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("/notes");
      response = await response.json();
      setNotes(response);
    }
    fetchData();
  }, [notes]);

  function submitNote(note) {
    console.log(note);

    axios.post("http://localhost:5000/create", note);
  }
  function deleteNote(currentNoteId) {
    console.log(currentNoteId);
    axios.delete("http://localhost:5000/delete" + currentNoteId);
    alert("item deleted", currentNoteId);
  }
  function update(editNote) {
    // console.log("update id", id);
    setIsUpdate(true);
    // console.log("e", editNote);
    setUpdateNote(editNote);
  }
  function onUpdate(inputText) {
    axios.put("http://localhost:5000/put" + inputText.id, inputText);
  }
  function handleClick(e, note) {
    console.log(note);
    let currEle = e.target.parentElement;
    console.log(e);
    if (currEle.id === "parent") {
      axios.put("http://localhost:5000/notes" + note.id);
    }
    console.log("clicked");
  }

  return (
    <>
      <Header />
      <InputArea
        data={updateNote}
        checkUpdate={checkUpdate}
        changeNote={changeNote}
        onAdd={submitNote}
        onUpdate={onUpdate}
      />
      <div style={{ textAlign: "center" }}>
        Completed:🟡 Not completed⚪ (Click on Note Tiles to Mark)
      </div>
      {notes.map((note, index) => (
        <Note
          onNoteClick={handleClick}
          key={note.key}
          id={note._id}
          onDelete={deleteNote}
          update={update}
          title={note.title}
          content={note.content}
          completed={note.completed}
        />
      ))}
      <Footer />
    </>
  );
}
