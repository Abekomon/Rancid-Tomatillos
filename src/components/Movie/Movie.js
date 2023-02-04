import React from 'react'
import './Movie.css'
import movieData from '../../movieData'


const Movie = (props) => {
  const genres = movieData.singleMovie.genres.map(genre => {
    return (
      <p className='genre' key={genre}>{genre}</p>
    )
  })
  
  return(
    <div className='main-container'>
      <div className='container'>
        
        <img src={movieData.singleMovie.poster_path} alt={movieData.singleMovie.title}/>
        
        <section className='info'>
          <h2>{movieData.singleMovie.title}</h2>
          <h3 className='tagline'>{movieData.singleMovie.tagline}</h3>
          <p className='overview'>{movieData.singleMovie.overview}</p>
          <p className='release'>Released {movieData.singleMovie.release_date}</p>
          <p className='money'>Budget: {movieData.singleMovie.budget}</p>
          <p className='money'>Revenue: {movieData.singleMovie.revenue}</p>
          <p className='runtime'>Runtime: {movieData.singleMovie.runtime}</p>
          <div className='genreBox'>
            {genres}
          </div>
        </section>
      </div>
      <button onClick={() => props.backToHome()}>HOME</button>
    </div>
  )
}

export default Movie