import React, { useState } from 'react'

export default function Form( props) {
    const [text, setText] = useState("")

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
    const handleClickcop = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(""))

    }
    const handleClear = () => {
        let newtext = "";
        console.log(text);
        setText(newtext);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const Button = ({onClick, title}) => {
        
        return (
            <button className=' btn  my-3 mx-2' style={{
                backgroundColor: props.mode === 'light' ? '#608BC1' : 'black',
                color: props.mode === 'light' ? 'white' : 'white'
              }}
               onClick={onClick}>{title}</button>
    
        )
    }
    const Button2 = ({children}) => {
    
        function handleAlert(){
            alert("its working")
        }

        return (
            <button className=' my-3 mx-2' onClick={handleAlert}>
                {children}
                </button>
    
        )
    }

    

    return (
        <>
            <div className="mb-3">
                <h2 className='my-3'>Enter the text to analyze below</h2>
                <textarea className="form-control" style={{backgroundColor:props.mode === 'light' ? 'white' : '#424242', color: props.mode === 'light' ? 'black' : 'white'}}  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                <div>
                    {/* <butto className='btn btn-primary my-3 mx-2' onClick={handleClickUP}>Uppercase</butto
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClickLo}>LowerCase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClickcop}>Copy</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Extra Spaces</button> */}
                    <Button title="Uppercase" onClick={handleClickUP} />
                    <Button title="LowerCase" onClick={handleClickLo} />
                    <Button title="Copy" onClick={handleClickcop} />
                    <Button title="Clear" onClick={handleClear} />
                    <Button title="Extra Spaces" onClick={handleExtraSpaces} />
                    {/* <Button2>
                      Hi
                    </Button2>
                    <Button2>
                      bye
                    </Button2> */}
                </div>

                <div>

                    <h2>
                        Text Summary
                    </h2>

                    <p>{text.split(" ").length} words and {text.length}characters</p>
                    <p>{0.008 * text.split("").length} read per minute</p>
                    <h2>
                        Preview:
                    </h2>
                    <p>{text.length>0?text:"Write something to preview it here......"}</p>
                </div>
            </div>
        </>
    )
}


