import React, { useState } from "react";
import Footer from "./Footer";
import {Header} from "./Header"
import Note from "./Note";
// import notes from "../note"
import InputArea from "./InputArea";



export default function App(){
  const [notes,setNotes]= useState([])

  function submitNote(note){
        setNotes((prevValue)=>{
            return [...prevValue,note]
        })
  }



    return (
    <>
    <Header/>
    <InputArea onAdd={submitNote}/>
    {
     notes.map((note)=>  <Note key={note.key} title={note.title} content={note.content}/>)
    }
    <Footer/>

    </>
    );
}