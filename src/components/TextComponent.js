import React, { useState } from 'react'
import './TextComponent.css'


function TextComponent(props) {
  const handleonchange =  (e) =>{ 
    setText(e.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleonlower = ()=>{
    let newText= text.toLowerCase();
    setText(newText)
  }
  const handleclear =()=>{
    setText('')
  }
  const handlecopy=()=>{
    navigator.clipboard.writeText(text);
  }
  const [text, setText] = useState('');
  
  return (
    <div>
        <h2 className='blocks'>Enter the Text here:</h2>
        <div className='text-box'>
        <textarea className="form-control" value={text} onChange={handleonchange}  id="myBox" rows="12" cols='50'></textarea>
            
        </div>
        <div className='convertbtns' >
          <button onClick={handleUpClick}>UpperCase</button>
          <button onClick={handleonlower}>LowerCase</button>
          <button onClick={handleclear}>Clear</button>
          <button onClick={handlecopy}>Copy</button>
        </div>
        <div>
          <h2>Text summary</h2>
          <p>WORDS : {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</p>
          <p>CHARACTERS : {text.length}</p>
          <p>{0.08 * text.split(' ').filter((ele)=>{return ele.length!==0}).length} Minutes to Read</p> 
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default TextComponent;
