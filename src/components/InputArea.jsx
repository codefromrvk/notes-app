import React,{ useState } from 'react';

export default function InputArea(props){

    const [inputText,setInputText]=useState({
        title:"",
        content:""
    })
    
    function addNote(e){
        const {id,value}=e.target;
        setInputText((prevValue)=>{
            return {
                ...prevValue,
                [id]:value
            }
        })
    }

    
    return(
        <div className="input-area">
            <input onChange={addNote} id="title" placeholder='Title' type="text"/>
            <input onChange={addNote} id="content" placeholder='Write note' type="text"/>
            <button onClick={()=>{props.onAdd(inputText)}} className='add-button'><span>Add</span></button>
        </div>
    )
}