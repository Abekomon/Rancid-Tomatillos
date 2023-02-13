import React, {Component} from 'react'
import fetchMovieData from '../../apiCalls'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: [],
      isLoading: true
    }
  }       

  componentDidMount() {
    console.log('header.js: componentDidMount')
      Promise.all(this.props.movieIds.map(id => {
        console.log('inside PromiseAll', id)
        return fetchMovieData(`movies/${id}`)  
      }))
      .then(movies => {
        const mappedMovies = movies.map((movie) => {
          return movie.movie
        })
        this.setState({ allMovies: mappedMovies})
      })
      .catch((error) => {console.log(error)})        
    }   

  render () { 
    
    return (
    <header className="header">
      <h1>Rancid Tomatillos</h1>
      <div className='nav-bar'>
        <h3>Action</h3>
        <h3>Drama</h3>
        <h3>Comedy</h3>
      </div>
    </header>
    )
  }
}

export default Header