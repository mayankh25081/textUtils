import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [modeText, setModeText] = useState("Enable dark mode");
  const toggle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setModeText("Enable light mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setModeText("Enable dark mode");
    }
  };

  return (
    <div className="container" style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}>
              <strong>This is the first item's accordion body.</strong>
              You can write your text in given box and convert it to Uppercase
              or lowercase or many other properties which you want.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}>
              <strong>This is the second item's accordion body.</strong>
              In second section of 'your text summary' you can see the total
              character and total words of your text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "light" ? "black" : "white"}}>
              <strong>This is the third item's accordion body.</strong> 
              In the last section of preview you can see your text
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button className="btn btn-primary my-3" onClick={props.mode}>
          {modeText}
        </button> */}
      </div>
    </div>
  );
}
