import React, { useState } from "react";
import logo from './swatch_logo.png'
import { ChromePicker } from 'react-color';

export default function Header() {

    const [background, setBackground] = useState([])

    const handleChangeComplete = (color) => {
        setBackground({ background: color.hex });
    };

        return (
            <div className="header">
                <ChromePicker className="chrome-picker"
                    color={ background }
                    onChangeComplete={ handleChangeComplete } />
                <img src={logo} alt="logo" id="logo" className="logo"></img>
                <p className="header-links"><a href="http://colormind.io/image/">Get a Pallete From an Image</a> | <a href="http://colormind.io/api-access/">Hit the API</a></p>
            </div>
        )
}