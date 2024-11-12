import React, { useState } from 'react'

export default function Form() {

    const handleClickUP = () => {
        let newtext = text.toUpperCase();
        console.log(text);
        setText(newtext);
    }
    const handleClickLo = () => {
        let newtext = text.toLocaleLowerCase();
        console.log(text);
        setText(newtext);
    }
    const handleClickcop = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(""))
       
    }
    const handleClear = () => {
        let newtext ="";
        console.log(text);
        setText(newtext);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="mb-3">
                <h2 className='my-3'>Enter the text to analyze below</h2>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                <div >
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClickUP}>Uppercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClickLo}>LowerCase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClickcop}>Copy</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Extra Spaces</button>

                    
                </div>

                <div>
                   
                   <h2>
                    Text Summary
                   </h2>
                   
                   <p>{text.split(" ").length} words and {text.length}characters</p>
                   <p>{0.008*text.split("").length} read per minute</p>
                   <h2>
                    Preview:
                   </h2>
                   <p>{text}</p>
                </div>
            </div>
        </>
    )
}
