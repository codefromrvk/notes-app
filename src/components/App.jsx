import React from "react";
import Footer from "./Footer";
import {Header} from "./Header"
import Note from "./Note";
import notes from "../note"



export default function App(){
    return (
    <>
    <Header/>
    {
     notes.map((note)=>  <Note key={note.key} title={note.title} content={note.content}/>)
    }
    <Footer/>

    </>
    );
}