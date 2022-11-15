import React, { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

// require('dotenv').config()

function GifListContainer() {
  const [ gifs, setGifs ] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY

  const handleFormSubmit = async (searchQuery) => {
    const r = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${API_KEY}`)
    const r_1 = await r.json()
    return setGifs(r_1.data.slice(0,3))
  }

  console.log("THIS IS THE STATE:", gifs)

  return (
    <>
    <GifList gifs={gifs}/>
    <GifSearch onFormSubmit={handleFormSubmit}/>
    </>
  )
}

export default GifListContainer