import React, {Component} from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.updateSearch(e, e.target.value)
  }

  render() {
    return (
      <form className="search-bar">
        <input 
          type="search" 
          name="searchValue" 
          placeholder="Search by movie title"
          onChange={(event) => this.handleInput(event)}
        />
        <button onClick={(event) => this.props.updateSearch(event, this.state.searchValue)}>Search</button>
      </form>
    )
  }
}

export default Searchbar