import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState("");

  const handleClickUP = () => {
    const newText = text.toUpperCase();
    console.log(newText); // Log updated text
    setText(newText);
  };

  const handleClickLo = () => {
    const newText = text.toLowerCase();
    console.log(newText); // Log updated text
    setText(newText);
  };

  const handleClickcop = () => {
    const textElement = document.getElementById("myBox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/\s+/).join(" "); // Replace multiple spaces with a single space
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Reusable Button component
  const Button = ({ onClick, title }) => (
    <button
      className="btn my-3 mx-2"
      style={{
        backgroundColor: props.mode === "light" ? "#608BC1" : "black",
        color: "white",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );

  return (
    <>
      <div className="mb-3">
        <h2 className="my-3">Enter the text to analyze below</h2>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#424242",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
        <div>
          <Button title="Uppercase" onClick={handleClickUP} />
          <Button title="Lowercase" onClick={handleClickLo} />
          <Button title="Copy" onClick={handleClickcop} />
          <Button title="Clear" onClick={handleClear} />
          <Button title="Extra Spaces" onClick={handleExtraSpaces} />
        </div>

        <div>
          <h2>Text Summary</h2>
          <p>{text.split(/\s+/).length} words and {text.length} characters</p>
          <p>{(0.008 * text.split("").length).toFixed(2)} minutes read</p>
          <h2>Preview:</h2>
          <p>{text.length > 0 ? text : "Write something to preview it here..."}</p>
        </div>
      </div>
    </>
  );
}
