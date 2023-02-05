import React from 'react'
import './Movie.css'


const Movie = (props) => {
  const genres = props.movieData.genres.map(genre => {
    return (
      <p className='genre' key={genre}>{genre}</p>
    )
  })
  
  return(
    <div className='main-container'>
      <div className='container'>
        
        <img src={props.movieData.poster_path} alt={props.movieData.title}/>
        
        <section className='info'>
          <h2>{props.movieData.title}</h2>
          <h3 className='tagline'>{props.movieData.tagline}</h3>
          <p className='overview'>{props.movieData.overview}</p>
          <p className='release'>Released {props.movieData.release_date}</p>
          <p className='money'>Budget: {props.movieData.budget}</p>
          <p className='money'>Revenue: {props.movieData.revenue}</p>
          <p className='runtime'>Runtime: {props.movieData.runtime}</p>
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