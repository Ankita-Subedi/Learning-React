import React, { useState } from 'react'

export default function TextBox(props) {
let handleUpClick = () =>{
    console.log("Button was clicked")
    let newText = text.toUpperCase();
    setText(newText);
}

let handleLoClick = () =>{
    console.log("Button was clicked")
    let newText = text.toLowerCase();
    setText(newText);
}

let handleOnChange = (event) =>{
    setText(event.target.value)
}

    const [text, setText] = useState('Enter text here...');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</div>
<div className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</div>
    </div>

    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
