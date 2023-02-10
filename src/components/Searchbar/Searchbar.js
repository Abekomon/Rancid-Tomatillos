import React, {Component} from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  render(props) {
    return (
      <form className="search-bar">
        <input type="search" name="searchValue" placeholder="Search by movie title" />
        <button onClick={(e) => props.updateSearch(e)}>Search</button>
      </form>
    )
  }
}

export default Searchbar