import React from 'react'
import { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState('Enter Text here...');
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

    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>Enter text below</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} type="button" className="btn btn-primary">Convert to UpperCase</button>
                <button onClick={handleLowClick} type="button" className="btn btn-primary my-3 mx-2">Convert to LowerCase</button>
            </div>
            <div className='container my-2'>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
