import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchData from '../../apiCalls'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'
import Movie from '../Movie/Movie'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      movieData: null,
    }
  }

  componentDidMount() {
    fetchData('movies').then(data => {
      this.setState({ movieData: data.movies, isLoading: false })
    })
  }

  render() {
    return (
      <main>
        <Header />
        <Route exact path='/' render={ () => this.state.isLoading ? <div className="loader"></div> : <PosterGrid movies={this.state.movieData}/> } />
        
        <Route path="/:movieID" render={({match}) => <Movie movieID={match.params.movieID}/>
        }  />
      </main>
    )
  }
}

export default App;