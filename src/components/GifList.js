import React from 'react'

function GifList({ gifs }) {

  const gifMap = gifs.map((gif) => {
    return <li>
      <img src={gif.images.original.url}/>
    </li>
  })

  return (
    <ul className='float-child'>
      {!gifs ? null : gifMap }
    </ul>
  )
}

export default GifList