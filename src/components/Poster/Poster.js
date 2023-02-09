import React from "react";
import './Poster.css';

const Poster = ({id, title, poster, rating}) => {
  return (
    <div className='poster' id={id} data-cy={id}>
      <img src={poster} alt={title}/>
      <footer>
        <h3>{title}</h3>
      </footer>
    </div>
  )
}

export default Poster