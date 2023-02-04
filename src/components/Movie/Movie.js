import React from 'react'
import './Movie.css'
import movieData from '../../movieData'


const Movie = () => {
  const genres = movieData.singleMovie.genres.map(genre => {
    return (
      <p className='genre'>{genre}</p>
    )
  })
  
  return(
    <div className='container'>
      
      <img src={movieData.singleMovie.poster_path} alt={movieData.singleMovie.title}/>
      
      <section className='info'>
        <h2>{movieData.singleMovie.title}</h2>
        <p className='tagline'>{movieData.singleMovie.tagline}</p>
        <p className='release'>Release Date: {movieData.singleMovie.release_date}</p>
        <p className='overview'>Overview: {movieData.singleMovie.overview}</p>
        <p className='money'>Budget: {movieData.singleMovie.budget}</p>
        <p className='money'>Revenue: {movieData.singleMovie.revenue}</p>
        <p className='runtime'>Runtime: {movieData.singleMovie.runtime}</p>
        {genres}
        <button>Back to home</button>
      </section>
    </div>
  )
}

export default Movie