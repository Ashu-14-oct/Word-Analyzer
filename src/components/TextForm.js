import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }
    const handleLowClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>Enter text below</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} type="button" className="btn btn-primary">Convert to UpperCase</button>
                <button onClick={handleLowClick} type="button" className="btn btn-primary my-3 mx-2">Convert to LowerCase</button>
                <button onClick={handleClearClick} type="button" className="btn btn-danger my-3 mx-2">Clear text</button>

            </div>
            <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    );
}
