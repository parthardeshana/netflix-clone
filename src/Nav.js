import React, { useEffect, useState } from 'react'
import logo from './images/netflix-logo.png';
import smiley from './images/smiley-face.svg';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else { handleShow(false) }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img className="netflix-logo logo" src={logo} alt="Netflix-logo" />
            <img className="smiley logo" src={smiley} alt="smiley-logo" />
        </div>
    )
}

export default Nav
