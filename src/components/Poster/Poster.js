import React from "react";
import './Poster.css';

const Poster = ({id, title, poster}) => {
  return (
    <div className='poster' id={id}>
      <img src={poster} alt={title}/>
      <footer>
        <h3>{title}</h3>
      </footer>
    </div>
  )
}

export default Poster