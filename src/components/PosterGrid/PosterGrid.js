import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import Movie from '../Movie/Movie'
import './PosterGrid.css'
import { Route, Link } from 'react-router-dom'

class PosterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: true,
      movieData: null,
      isLoading: true
    }
  }

  backToHome = () => {
    this.setState({ mainView: true, movieData: null, isLoading: true })
  }

  render() {
    const moviePosters = this.props.movies.map(movie => {
      return (
        <Link to={`/${movie.id}`}>
          <Poster 
            key={movie.id}
            id={movie.id}
            title={movie.title} 
            poster={movie.poster_path} 
            rating={movie.average_rating} 
          />
        </Link>
      )
    })
    
    return (
      <> 
        <div className='posterGrid'> 
          {moviePosters}
        </div>
      </>
    )
  }
}

export default PosterGrid