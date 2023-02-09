import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import fetchMovieData from '../../apiCalls'
import './Movie.css'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: {},
      isLoading: true,
      response: false,
      statusCode: 200
    }
  }

  componentDidMount() {
    fetchMovieData(`movies/${this.props.movieID}`)
    .then(data => {
      this.setState({movieData: data.movie, isLoading: false, response: true})
    }).catch((error) => {this.setState({response: false, isLoading: false, statusCode: error.message})})
  }

  render() {
    if(this.state.isLoading){
      return <div className="loader"></div>
    } else if (!this.state.response) {
      return <Redirect to={`/error/${this.state.statusCode}`}/>
    } else {
      const { title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline } = this.state.movieData
      const genreList = genres.map(genre => {
        return (
          <p className='genre' key={genre}>{genre}</p>
        )
      })
      return(
        <div className='main-container'>
          <div className='container'>
            
            <img src={movieData.poster_path} alt={movieData.title} data-cy={movieData.id}/>
            
            <section className='info'>
              <h2>{title}</h2>
              <h3 className='tagline'>{tagline}</h3>
              <p className='overview'>{overview}</p>
              <p className='release'>Released {release_date}</p>
              <p className='money'>Budget: {budget}</p>
              <p className='money'>Revenue: {revenue}</p>
              <p className='runtime'>Runtime: {runtime}</p>
              <div className='genreBox'>
                {genreList}
              </div>
            </section>
          </div>
          <Link to="/">
            <button className="home-button" data-cy="home">HOME</button>
          </Link>
        </div>
      )
    }
  }
}

export default Movie