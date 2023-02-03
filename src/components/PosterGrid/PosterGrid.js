import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import './PosterGrid.css'

const PosterGrid = (props) => {
  const moviePosters = props.movies.map(movie => {
    return (
      <Poster 
        title={movie.title} 
        poster={movie.poster_path} 
        rating={movie.average_rating} 
      />
    )
  })
  return (
    <div className='posterGrid'> 
      {moviePosters}
    </div>
  )
}

export default PosterGrid