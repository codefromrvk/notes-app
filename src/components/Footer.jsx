import React from "react";

export default function Footer(){

    let year = new Date();
    
    return <footer><p>rvk {year.getFullYear()}</p></footer>
}