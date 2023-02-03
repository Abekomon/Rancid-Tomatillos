import React, { Component } from 'react'
import Header from '../Header/Header'
import movieData from '../../movieData'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movieData: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <Header />
        <PosterGrid movies={this.state.movieData}/>
      </main>
    )
  }
}

export default App;