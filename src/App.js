import React, { useState, useEffect, useCallback } from "react";
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
import Loading from './Loading'
import Error from './Error'

const api = "https://swatchswap.netlify.app/api"
const paletteSeeds = "https://swatch-swap-default-rtdb.firebaseio.com/palettes.json"

export default function App() {

  const [colors, setColors] = useState([])
  const [premadeOne, setPaletteOne] = useState([])
  const [premadeTwo, setPaletteTwo] = useState([])
  const [premadeThree, setPaletteThree] = useState([])
  const [premadeFour, setPaletteFour] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const timeoutHandler = (time, promise) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("API Offline"))
      }, time)
      promise
        .then(value => {
          clearTimeout(timer)
          resolve(value)
        })
        .catch(reason => {
          clearTimeout(timer)
          reject(reason)
        })
    })
  }

  const loadColors = useCallback(() => {
    setIsLoading(true)
    timeoutHandler(10000, fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default',
      })
    }))
      .then(response => response.json())
      .then(colors => {
        setIsLoading(false)
        setColors(colors.result)
      })
      .catch(error => {
        setErrorMessage("API Offline")
        setIsLoading(false)
      })
  }, [] );


  const loadPalettes = () => {
    fetch(paletteSeeds)
      .then(response => response.json())
      .then(palettes => {
        setPaletteOne(palettes.one)
        setPaletteTwo(palettes.two)
        setPaletteThree(palettes.three)
        setPaletteFour(palettes.four)
      })}

  useEffect(() => {
    loadColors()
    loadPalettes()
  }, [loadColors])

    return (
      <div className="App">
        <Header />
        <NavBar
          loadColors={loadColors}
          colors={colors}/>
        {isLoading ? <Loading message="Loading API" /> : null }
        {errorMessage ? <Error message={errorMessage} /> : null }
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