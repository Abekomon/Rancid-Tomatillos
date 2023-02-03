import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import Movie from '../Movie/Movie'
import './PosterGrid.css'

class PosterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: true,
      currentId: null,
    }
  }

  handleChange = (id) => {
    if(id) {
      this.setState({ currentId: id, mainView: false })
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
        {this.state.mainView && <div className='posterGrid' onClick={(e) => this.handleChange(e.target.id)}> 
          {moviePosters}
        </div>}

        {!this.state.mainView && <div>
          <Movie 
            id={this.state.id}
          />
        </div>}
      </>
    )
  }
}

export default PosterGrid