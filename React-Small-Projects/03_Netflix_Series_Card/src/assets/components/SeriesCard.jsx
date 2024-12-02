import React from 'react'

const SeriesCard = (props) => {
  return (
    <>
      <li key={props.curEle.id}>
      <img
       src={props.curEle.img_url}
       alt={props.curEle.name}
       width="40%"
       height="40%"
      ></img>
      <h2>Name: {props.curEle.name}</h2>
      <h3>Rating: {props.curEle.rating}</h3>
      <p>Description: {props.curEle.description}</p>
      <p>Genre: {props.curEle.genre}</p>
      <p>Cast: {props.curEle.cast}</p>
      <a href={props.curEle.watch_url}>
        <button style={{marginBottom:"10px"}}>Watch Now</button>
      </a>
      </li> 
      </>
    )
    
}

export default SeriesCard;
