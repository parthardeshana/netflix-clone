import React from 'react'
import logo from './images/netflix-logo.png';
import smiley from './images/smiley-face.svg';
import './Nav.css'

function Nav() {
    return (
        <div className="navbar">
            <img className="netflix-logo logo" src={logo} alt="Netflix-logo" />
            <img className="smiley logo" src={smiley} alt="smiley-logo" />
        </div>
    )
}

export default Nav
