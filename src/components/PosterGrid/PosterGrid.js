import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import './PosterGrid.css'
import { Link } from 'react-router-dom'

class PosterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: true,
      isLoading: true
    }
  }

  render() {
    const moviePosters = this.props.movies.map(movie => {
      return (
        <Link key={movie.id} to={`/${movie.id}`}>
          <Poster 
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