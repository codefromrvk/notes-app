import React from 'react';

export default function InputArea(){
    return(
        <div className="input-area">
            <input id="title-text" placeholder='Title' type="text"/>
            <input id="input-text" placeholder='Write note' type="text"/>
            <button className='add-button'><span>Add</span></button>
        </div>
    )
}