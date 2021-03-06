// import React, { useState } from "react";
import React from "react";
import logo from './swatch_logo.png'
// import { ChromePicker } from 'react-color';

export default function Header() {

    // const [background, setBackground] = useState("#fff")

    // const handleChangeComplete = (color) => {
    //     setBackground({ background: color.hex });
    // };

        return (
            <div className="header">
                {/* <ChromePicker className="chrome-picker"
                    color={ background }
                    onChangeComplete={ handleChangeComplete } /> */}
                <img src={logo} alt="logo" id="logo" className="logo"></img>
                <h5 className="header-links"><a href="http://colormind.io/image/">Get a Pallete From an Image</a> | <a href="http://colormind.io/api-access/">Hit the API</a></h5>
            </div>
        )
}