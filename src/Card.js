import React from "react";

export default function Card({color}){

    const RGBToHex = (r, g, b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length === 1)
            r = "0" + r;
        if (g.length === 1)
            g = "0" + g;
        if (b.length === 1)
            b = "0" + b;
        return "#" + r + g + b;
    }

    const convert = () => {
        let hexString = RGBToHex(color[0],color[1],color[2])
        return hexString.toUpperCase()
    }

    return(
        <div className="colorCard" style={{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
            <p className="card" > RGB: {color[0]}, {color[1]}, {color[2]} </p>
            <button className="lock">Lock</button>
            <p id="hex" >Hex: {convert()}</p>
        </div>
    )

}