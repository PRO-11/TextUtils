import React, { useState } from 'react';
export default function Textbar(props) {
    function textchange() {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Success","Text converted to Uppercase")
    }
    function textchange2() {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Success","Text converted to Lowercase")
    }
    function textset(event) {
        setText(event.target.value);
        wordset(text.split(/[ ]+/));
    }
    const Removespace = () => {
         let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const [text, setText] = useState("");
    const [wordtext, wordset] = useState("");

    return (
        <>
            <div className="container my-3">
                <h1 style={{ color: (props.mode == 'light') ? '#042743' : 'white' }}>{props.title}</h1>
                <label htmlFor="Text" class="form-label">Example textarea</label>
                <textarea className="form-control" placeholder="Enter text" style={{ backgroundColor: (props.mode == 'light') ? 'white' : 'grey', color: (props.mode == 'light') ? 'black' : 'white' }} value={text} onChange={textset} id="Text" rows="3" />
                <button type="button" onClick={textchange} class="btn btn-primary my-3">Uppercase</button>
                <button type="button" onClick={textchange2} class="btn btn-primary my-3 mx-3">Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-3" onClick={Removespace}>Remove spaces</button>
            </div>
            <div className="container my-3 "style={{color:(props.mode=='light')?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{wordtext.length} words and {text.length} characters</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Write Something"}</p>
            </div>
        </>
    );
}