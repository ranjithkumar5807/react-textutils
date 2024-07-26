import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextComponent from './components/TextComponent';
function App(){
  const [mode,setMode]=useState('light');

  const changeMode=()=>{
    if (mode==="light"){
      setMode("dark")

    }
    else{
      setMode("light")
    }
  }
  return (
  <>
        <Navbar mode={mode} changeMode={changeMode}/>
        <TextComponent/>
  </>);
}

export default App;