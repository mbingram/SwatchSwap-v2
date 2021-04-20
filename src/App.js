import React, { useState, useEffect } from "react";
import './App.css';
import ColorsDiv from './ColorsDiv'
import Header from './Header'
import NavBar from './NavBar'
import PremadeDiv from './PremadeDiv'
import Divider from './Divider'

const baseURL = "http://colormind.io/api/"
const paletteSeeds = "http://localhost:6001/palettes"

export default function App() {

  const [colors, setColors] = useState([])
  const [premadePalettes, setPalettes] = useState([])

  const loadColors = () => {
    fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default',
      })
    })
      .then(response => response.json())
      .then(colors => {
        console.log(colors.result)
        setColors(colors.result)
        })
  };

  const loadPalettes = () => {
    fetch(paletteSeeds)
      .then(response => response.json())
      .then(palettes => {
        console.log(palettes)
        setPalettes(palettes)
      })}

  useEffect ( () => {
    loadColors()
    loadPalettes()
  }, [] )

    return (
      <div className="App">
        <Header />
        <NavBar
          loadColors={loadColors}/>
        <ColorsDiv
          colors={colors} />
        <Divider />
        <PremadeDiv premadePalettes={premadePalettes} />

      </div>
    );


}