import React from 'react'

const SeriesCard = (props) => {
  const {id, img_url, name, genre, rating, cast, watch_url, description} = props.curEle
  return (
    <>
      <li key={id}>
      <img
       src={img_url}
       alt={name}
       width="40%"
       height="40%"
      ></img>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Description: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url}>
        <button style={{marginBottom:"10px"}}>Watch Now</button>
      </a>
      </li> 
      </>
    )
    
}

export default SeriesCard;
