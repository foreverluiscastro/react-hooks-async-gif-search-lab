import React, { useState } from 'react'
import '../index.css'

function GifSearch({ onFormSubmit }) {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(search)
  }


  return (
    <form className='float-child' onSubmit={handleSubmit}>
      <label><b>Enter a Search Term:</b></label>
      <input type="text" name='search' onChange={handleChange}/>
      <button type='submit' style={{ width: '90px', backgroundColor: 'limegreen', color: 'white' }}>Find Gifs</button>
    </form>
  )
}

export default GifSearch