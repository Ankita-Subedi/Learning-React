import React, { useState } from "react";

export default function TextBox(props) {
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to upper case", "sucess");
  };

  let handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lower case", "sucess");
  };

  let handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  const [text, setText] = useState("Enter text here...");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {console.log(props.mode)}
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To LowerCase
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters */}
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview it here"}</p>
      </div>
    </>
  );
}
