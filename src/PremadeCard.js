import React from "react";

export default function PremadeCard({palette}){

    // function hexToRgb(hex) {
    //     var bigint = parseInt(hex, 16);
    //     var r = (bigint >> 16) & 255;
    //     var g = (bigint >> 8) & 255;
    //     var b = bigint & 255;
    
    //     return r + "," + g + "," + b;
    // }
    
    // const convert = () => {
    //     console.log(hexToRgb(palette))
    //     return (hexToRgb(palette));
    // }

    const rgbToHex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    const convert = () => {
        return rgbToHex(palette);
    }


    return(
        <div className="colorCard" style={{backgroundColor: `rgba(${palette[0]}, ${palette[1]}, ${palette[2]})` }} key={palette}>
            <p>RGB: {palette[0]}, {palette[1]}, {palette[2]} </p>
            <p>Hex: #{convert()} </p>
        </div>
    )

}