import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchMovieData from '../../apiCalls'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'
import Movie from '../Movie/Movie'
import { Redirect, Route } from 'react-router-dom'
import Errors from '../Errors/Errors'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      movieData: [],
      response: false,
      statusCode: 200,
      movieIds: []
    }
  }


  componentDidMount() {
    fetchMovieData('movies').then(data => {
      this.setState({ movieData: data.movies, isLoading: false, response: true }, () => this.getMovieIds())
    }).catch((error) => {this.setState({response: false, isLoading: false, statusCode: error.message})})
  }

  getMovieIds = () => {
    const movies = this.state.movieData
    const movieIds = movies.map(movie => {
      return movie.id
    })
    this.setState({movieIds: movieIds})
  }

  render() {
    return (  

      <main>
        <Header allMovies={this.state.allMovies}/>

        <Route exact path="/error/:code" render={ ({match}) => 
          <Errors statusCode={match.params.code}/>
        } />

        <Route exact path='/' render={ () => 
          this.state.isLoading ? <div className="loader"></div> : 
          !this.state.response ? <Redirect to={`/error/${this.state.statusCode}`} /> :
          <PosterGrid movies={this.state.movieData}/> } 
          />

        
        <Route exact path="/:movieID" render={({match}) => 
            <Movie movieID={match.params.movieID}/> 
          }
        />
      </main>
    )
  }
}

export default App;

