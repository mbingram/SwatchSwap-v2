import React, { useState, useEffect } from "react";
import './App.css';
import ColorsDiv from './ColorsDiv'
import Header from './Header'
import NavBar from './NavBar'
import PremadeDiv from './PremadeDiv'
import Premade2 from './Premade2'
import Premade3 from './Premade3'
import Premade4 from './Premade4'
import Divider1 from './Divider1'
import Divider2 from './Divider2'
import Divider3 from './Divider3'

const baseURL = "https://colormind.io/api/"
const paletteSeeds = "http://localhost:6001/palettes"

export default function App() {

  const [colors, setColors] = useState([])
  const [premadeOne, setPaletteOne] = useState([])
  const [premadeTwo, setPaletteTwo] = useState([])
  const [premadeThree, setPaletteThree] = useState([])
  const [premadeFour, setPaletteFour] = useState([])

  const loadColors = () => {
    fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default',
      })
    })
      .then(response => response.json())
      .then(colors => {
        setColors(colors.result)
        })
  };

  const loadPalettes = () => {
    fetch(paletteSeeds)
      .then(response => response.json())
      .then(palettes => {
        setPaletteOne(palettes.one)
        setPaletteTwo(palettes.two)
        setPaletteThree(palettes.three)
        setPaletteFour(palettes.four)
      })}

  useEffect ( () => {
    loadColors()
    loadPalettes()
  }, [] )

    return (
      <div className="App">
        <Header />
        <NavBar
          loadColors={loadColors}
          colors={colors}/>
        <ColorsDiv
          colors={colors} />
        <Divider1 />
        <Divider2 />
        <Divider3 />
        <PremadeDiv
          premadePalettes={premadeOne} />
        <Premade2 
          premadeTwo={premadeTwo} />
        <Premade3
          premadeThree={premadeThree} />
        <Premade4
          premadeFour={premadeFour} />

      </div>
    );


}