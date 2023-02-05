import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchData from '../../apiCalls'
import './App.css'
import PosterGrid from '../PosterGrid/PosterGrid'

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
        {this.state.isLoading && <h3 className='loading'>Loading...</h3>}
        {!this.state.isLoading && <PosterGrid movies={this.state.movieData}/>}
      </main>
    )
  }
}

export default App;