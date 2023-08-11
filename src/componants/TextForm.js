import React, { useState } from "react";
// import "../App.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // for upper case
  const clickUp = () => {
    setText(text.toUpperCase());
  };

  // for lower case
  const clickLow = () => {
    setText(text.toLowerCase());
  };

  // for erase
  const clickErase = () => {
    setText("");
  };

  // for speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // for copy the text
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // handle extra space
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // compulsory function to cahnge the text
  const handelOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#2b2525" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handelOnChange}
            placeholder="Enter text here"
          ></textarea>
          <div>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={clickUp}
            >
              convert to uppercase
            </button>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={clickLow}
            >
              convert to lowercase
            </button>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={clickErase}
            >
              erase
            </button>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={speak}
            >
              speak
            </button>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={handleCopy}
            >
              copy text
            </button>
            <button
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } btn-outline-${
                props.mode === "dark" ? "" : "primary"
              } my-3 mx-2`}
              onClick={handleExtraSpace}
            >
              remove extra space
            </button>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above box to preview here"}
        </p>
      </div>
    </>
  );
}
