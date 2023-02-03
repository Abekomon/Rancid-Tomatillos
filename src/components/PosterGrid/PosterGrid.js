import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import './PosterGrid.css'

class PosterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: true,
    }
  }

  render() {
    const moviePosters = this.props.movies.map(movie => {
      return (
        <Poster 
          key={movie.id}
          id={movie.id}
          title={movie.title} 
          poster={movie.poster_path} 
          rating={movie.average_rating} 
        />
      )
    })
    
    return (
      <> 
        {this.state.mainView && <div className='posterGrid'> 
          {moviePosters}
        </div>}

        {!this.state.mainView && <div>
          <h2>Hello!</h2>
        </div>}
      </>
    )
  }
}

export default PosterGrid