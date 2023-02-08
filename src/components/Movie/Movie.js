import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../../apiCalls'
import './Movie.css'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: null,
      isLoading: true
    }
  }

  componentDidMount() {
    fetchData(`movies/${this.props.movieID}`)
    .then(data => this.setState({movieData: data.movie, isLoading: false}))
  }

  render() {
    const movieData = this.state.movieData
    if(this.state.isLoading){
      return <div className="loader"></div>
    } else {
      const genres = movieData.genres.map(genre => {
        return (
          <p className='genre' key={genre}>{genre}</p>
        )
      })
      return(
        <div className='main-container'>
          <div className='container'>
            
            <img src={movieData.poster_path} alt={movieData.title}/>
            
            <section className='info'>
              <h2>{movieData.title}</h2>
              <h3 className='tagline'>{movieData.tagline}</h3>
              <p className='overview'>{movieData.overview}</p>
              <p className='release'>Released {movieData.release_date}</p>
              <p className='money'>Budget: {movieData.budget}</p>
              <p className='money'>Revenue: {movieData.revenue}</p>
              <p className='runtime'>Runtime: {movieData.runtime}</p>
              <div className='genreBox'>
                {genres}
              </div>
            </section>
          </div>
          <Link to="/">
            <button className="home-button">HOME</button>
          </Link>
        </div>
      )
    }
  }
}

export default Movie