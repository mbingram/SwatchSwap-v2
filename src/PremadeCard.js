import React from "react";

export default function PremadeCard({palette}){

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
        let hexString = RGBToHex(palette[0],palette[1],palette[2])
        return hexString.toUpperCase()
    }

    return(
        <div className="colorCard" style={{backgroundColor: `rgba(${palette[0]}, ${palette[1]}, ${palette[2]})` }} key={palette}>
            <p>RGB: {palette[0]}, {palette[1]}, {palette[2]} </p>
            <p>Hex: {convert()} </p>
        </div>
    )

}