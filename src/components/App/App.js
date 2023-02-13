import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchMovieData from '../../apiCalls'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'
import Movie from '../Movie/Movie'
import { Redirect, Route } from 'react-router-dom'
import Errors from '../Errors/Errors'
import Searchbar from '../Searchbar/Searchbar'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      movieData: [],
      displayData: [],
      response: false,
      statusCode: 200
    }
  }

  componentDidMount() {
    fetchMovieData('movies').then(data => {
      this.setState({ movieData: data.movies, displayData: data.movies, isLoading: false, response: true })
    }).catch((error) => {this.setState({response: false, isLoading: false, statusCode: error.message})})
  }

  updateSearch = (value) => {
    if(value) {
      const filteredMovies = this.state.movieData.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
      this.setState({ displayData: filteredMovies })
    } else {
      this.setState({ displayData: this.state.movieData })
    }
  }

  render() {
    return (
      <main>
        <Header />

        <Route exact path="/error/:code" render={ ({match}) => 
          <Errors statusCode={match.params.code}/>
        } />

        <Route exact path="/" render={ () => 
          this.state.isLoading ? <div className="loader"></div> : 
          !this.state.response ? <Redirect to={`/error/${this.state.statusCode}`} /> :
          <>
            <Searchbar updateSearch={this.updateSearch} />
            <PosterGrid movies={this.state.displayData}/>  
          </>
        } />

        <Route exact path="/:movieID" render={({match}) => 
          <Movie movieID={match.params.movieID}/> 
        } />
      </main>
    )
  }
}

export default App;

