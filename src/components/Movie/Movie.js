import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import fetchMovieData from '../../apiCalls'
import './Movie.css'
import dayjs from 'dayjs'

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
      const { id, title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating } = this.state.movieData
      const genreList = genres.map(genre => {
        return (
          <p className='genre' key={genre}>{genre}</p>
        )
      })
      return(
        <div className='main-container'>
          <div className='container'>
            
            <img src={poster_path} alt={title} data-cy={`movie/${id}`}/>
            
            <section className='info' data-cy={`info/${id}`}>
              <h2>{title}</h2>
              <h3 className='tagline' data-cy={`tagline/${id}`}>{tagline}</h3>
              <p className='overview' data-cy={`overview/${id}`}>{overview}</p>
              <p>Average Rating: {average_rating}/10</p>
              <p className='release' data-cy={`release_date/${id}`}>Released: {dayjs(release_date).format('MMM DD, YYYY')} </p>
              <p className='money' data-cy={`budget/${id}`}>Budget: { budget ? `$${budget.toLocaleString('en-US')}` : 'N/A' } </p>
              <p className='money' data-cy={`revenue/${id}`}>Revenue: { revenue ? `$${revenue.toLocaleString('en-US')}` : 'N/A' }</p>
              <p className='runtime' data-cy={`runtime/${id}`}>Runtime: {runtime} minutes</p>
              <div className='genreBox' data-cy={`genrelist/${id}`}>
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