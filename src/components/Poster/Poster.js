import React from "react";
import './Poster.css';

const Poster = ({id, title, poster, rating}) => {
  return (
    <div className='poster'>
      <img src={poster} alt={title}/>
      <footer>
        <h3>{title}</h3>
        {/* <p>Rating: {rating.toFixed(1)}</p> */}
      </footer>
    </div>
  )
}

export default Poster