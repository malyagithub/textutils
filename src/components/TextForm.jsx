import React, { useState } from "react";

function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase","success");
  };
  const handlelpclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
      props.showalert("converted to lowercase","success");
  };
  const cleartext = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleColourClick = () => {
    setTextColor("red");
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const countSentences = (str) => {
    return str
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0).length;
  };

  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  return (
    <>
      <div className="container my-3 "style={{
        backgroundColor : props.mode=== 'dark' ?'white':'black'
      }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{ color: textColor,
                backgroundColor : props.mode=== 'dark' ?'grey':'light'
             }}
            onChange={handleonchange}
            id="mybox"
            value={text}
            rows="8"
           
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary" onClick={handlelpclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary" onClick={cleartext}>
          Clear text
        </button>
        <button className="btn btn-danger" onClick={handleColourClick}>
          Make Text Red
        </button>
      </div>

      <div className="container my-3">
        <h1>your text summary </h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length >0 ?text:"enter something to preview it here....."}</p>
        <p>Total Sentences: {countSentences(text)}</p>
      </div>
    </>
  );
}

export default TextForm;
