import React, { useState } from 'react'

export default function TextBox(props) {
let handleUpClick = () =>{
    console.log("Button was clicked")
    let newText = text.toUpperCase();
    setText(newText);
}

let handleOnChange = (event) =>{
    setText(event.target.value)
}

    const [text, setText] = useState('Enter text here...');
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<div className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</div>
    </div>
  )
}
