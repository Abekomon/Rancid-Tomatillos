import React, {Component} from "react";
import "./Searchbar.css"

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.updateSearch(e.target.value)
  }

  componentWillUnmount() {
    this.props.updateSearch('')
  }

  render() {
    return (
      <form className="search">
        <input 
          className="search-bar"
          data-cy="search-bar"
          type="search" 
          name="searchValue"
          value={this.state.searchValue}
          placeholder="Search by movie title"
          onChange={(event) => this.handleInput(event)}
        />
      </form>
    )
  }
}

export default Searchbar