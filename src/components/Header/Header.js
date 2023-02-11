import React, {Component} from 'react'
import fetchMovieData from '../../apiCalls'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
      return Promise.allSettled(this.props.movieIds.map(id => {
        return fetchMovieData(`movies/${id}`)
      }))
      .then(data => console.log(data))
      // .then(data => {this.setState({allMovies: data})})
    }

  // getAllMovies = () => {
  //   return this.props.movieIds.map(id => {
  //     fetchMovieData(`movies/${id}`)
  //     .then(data => this.setState({allMovies: [...this.state.allMovies, data]}))
  //   })
  // }

  // sortMovies = () => {

  // }
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