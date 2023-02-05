import React, { Component } from 'react'
import Poster from '../Poster/Poster'
import Movie from '../Movie/Movie'
import './PosterGrid.css'
import fetchData from '../../apiCalls'

class PosterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: true,
      movieData: null,
      isLoading: true
    }
  }

  handleChange = (id) => {
    if(id) {
      this.setState({ mainView: false })
      fetchData(`movies/${id}`)
      .then(data => this.setState({ movieData: data.movie, isLoading: false }))
    }
  }

  backToHome = () => {
    this.setState({ mainView: true, movieData: null, isLoading: true })
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

        {!this.state.mainView && 
        <div>
          { this.state.isLoading && <h3>Loading...</h3> }
          { !this.state.isLoading &&
          <Movie 
            movieData={this.state.movieData}
            backToHome={ this.backToHome }
          />
          }
        </div>}
      </>
    )
  }
}

export default PosterGrid