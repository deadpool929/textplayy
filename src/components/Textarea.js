import React, { useState } from "react";

import Alert from "./Alert";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);

  const toUpperCase = () => {
    if (text.length > 0) {
      let upper = text.toUpperCase();
      setText(upper);
      setAlert(" Text Converted To Uppercase ");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert("First Write Something!!");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  const toLowerCase = () => {
    if (text.length > 0) {
      let lower = text.toLowerCase();
      setText(lower);
      setAlert(" Text Converted To Lowercase ");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert("First Write Something!!");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  const toChangeText = (e) => {
    setText(e.target.value);
  };

  const toRemoveExtraSpaces = () => {
    if (text.length > 0) {
      let remove = text.replace(/\s\s+/g, " ");
      setText(remove);
      setAlert("Removed Extra Spaces");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert("First Write Something!!");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  const toCopy = () => {
    if (text.length > 0) {
      let copyText = document.getElementById("myBox");

      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);

      setAlert(" Text Copied to Clipboard! ");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert("First Write Something!!");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="container" style={{ marginTop: "40px" }}>
        <h1 className="mb-3">Enter your text below</h1>

        <div className="mb-3">
          <textarea
            style={props.mode}
            className="form-control "
            id="myBox"
            rows="8"
            value={text}
            onChange={toChangeText}
            placeholder="Enter your text here"
          ></textarea>
        </div>

        <button className=" btn btn-primary mx-1 my-1" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={toRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={toCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() => {
            if (text.length > 0) {
              setText("");
              setAlert("Text Cleared!");
              setTimeout(() => {
                setAlert(null);
              }, 1500);
            } else {
              setAlert("First Write Something!!");
              setTimeout(() => {
                setAlert(null);
              }, 1500);
            }
          }}
        >
          Reset
        </button>

        <div>
          <p>
            {text.split(" ").filter((n) => n.length !== 0).length} words{" "}
            {text.split("").filter((n) => n.length !== 0).length} charachters{" "}
            <br />
            {text.split(" ").length * 0.08} minutes to read
          </p>
        </div>
        <div>
          <h2>Preview</h2>
          <p>{text.length ? text : "Enter your text to preview"}</p>
        </div>
      </div>
    </>
  );
}
