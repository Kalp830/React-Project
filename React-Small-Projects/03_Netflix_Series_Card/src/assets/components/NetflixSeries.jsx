import React from 'react'
import seriesData from '../../api/seriesData.json';
const NetflixSeries = () => {
  return (
    <>
<ul>
 {seriesData.map((curEle) =>(
<li key={curEle.id}>
      <img
       src={curEle.img_url}
       alt={curEle.name}
       width="40%"
       height="40%"
      ></img>
      <h2>Name: {curEle.name}</h2>
      <h3>Rating: {curEle.rating}</h3>
      <p>Description: {curEle.description}</p>
      <p>Genre: {curEle.genre}</p>
      <p>Cast: {curEle.cast}</p>
      <a href={curEle.watch_url}>
        <button style={{marginBottom:"10px"}}>Watch Now</button>
      </a>
      </li>
      ))};
      </ul>
    </>
  )
}

export default NetflixSeries
