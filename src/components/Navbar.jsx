import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <div>
      <nav className='navbar'>
        <h2>Navbar</h2>
        <div className={props.mode==='light'?'light-nav-links':"dark-nav-links"} >
            <a href='/'>Home</a>
            <a href='/'>About</a>
            
            <button onClick={props.changeMode}>{props.mode}</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;