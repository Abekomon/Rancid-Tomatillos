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
  }

  render(props) {
    return (
      <form className="search-bar">
        <input 
          type="search" 
          name="searchValue" 
          placeholder="Search by movie title"
          onChange={(e) => this.handleInput(e)}
        />
        <button onClick={(e) => props.updateSearch(e)}>Search</button>
      </form>
    )
  }
}

export default Searchbar