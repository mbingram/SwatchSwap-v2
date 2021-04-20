import React from 'react'

export default function NavBar({loadColors}){

    const handleClick = (event) => {
        loadColors()
    }

    return(
        <div className="topnav">
            <button className="random-button" onClick={handleClick}>Randomize</button>
        </div>
    )
}