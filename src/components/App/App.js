import React, { Component } from 'react'
import Header from '../Header/Header'
import fetchData from '../../apiCalls'
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
      movieData: null,
      response: null
    }
  }

  componentDidMount() {
    fetchData('stuff').then(data => {
      this.setState({ movieData: data.movies, isLoading: false, response: true })
    }).catch(error => {this.setState({response: false, isLoading: false})})
  }

  render() {
    return (
      <main>
        <Header />

        <Route exact path="/error/404" render={ () => 
          <Errors />
        } />

        <Route exact path='/' render={ () => 
          this.state.isLoading ? <div className="loader"></div> : 
          !this.state.response ? <Redirect to="/error/404" /> :
          <PosterGrid movies={this.state.movieData}/> } 
          />

        
        <Route exact path="/:movieID" render={({match}) => <Movie movieID={match.params.movieID}/>
        
        }  />
      </main>
    )
  }
}

export default App;

