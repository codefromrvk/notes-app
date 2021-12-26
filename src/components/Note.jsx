import React from "react";

export default function Note(props){
    const {id,title,content,onDelete}={...props}
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button 
            onClick={
                ()=>{
                    onDelete(id)
                    
                }}>
                Delete
            </button>
        </div>
    )
}