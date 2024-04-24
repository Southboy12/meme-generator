import React from "react";
import logo from '../images/troll-face.png'


export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="meme funny face"/>
            <h2 className="navbar__title">Meme Generator</h2>
            <h4 className="navbar__subtitle">React Course - Project 3</h4>
        </nav>
    )
}