import React, { useState } from "react";
import Footer from "./Footer";
import {Header} from "./Header"
import Note from "./Note";
import notes from "../note"
import InputArea from "./InputArea";



export default function App(){
  
    return (
    <>
    <Header/>
    <InputArea/>
    {
     notes.map((note)=>  <Note key={note.key} title={note.title} content={note.content}/>)
    }
    <Footer/>

    </>
    );
}