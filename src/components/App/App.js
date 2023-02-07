import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchData from '../../apiCalls'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'
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
        <Route path='/' render={ () => this.state.isLoading ? <div class="loader"></div> : <PosterGrid movies={this.state.movieData}/> } />
      </main>
    )
  }
}

export default App;