import React from "react";
import './Errors.css'
import { Link } from 'react-router-dom'

const Errors = (props) => {
  if (props.statusCode >= 400 && props.statusCode <= 499) {
    return (
      <>
        <h3 className="error-message" data-cy="error">Whoops! I'm not sure where that is.  Try going back home.</h3>
        <Link to="/">
          <button className="home-button" data-cy="home">HOME</button>
        </Link>
      </>
    )
  } else if (props.statusCode >= 500) {
    return (
      <h3 className="error-message" data-cy="error">Something is wrong with our server. Come back later.</h3>
    )
  }
}

export default Errors