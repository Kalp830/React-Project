import React from 'react'
import seriesData from '../../api/seriesData.json';
const NetflixSeries = () => {
  return (
    <>
      <img
       src={seriesData[0].img_url}
       alt="img"
       width="40%"
       height="40%"
      ></img>
      <h2>Name: {seriesData[0].name}</h2>
      <h3>Rating: {seriesData[0].rating}</h3>
      <p>Description: {seriesData[0].description}</p>
      <p>Genre: {seriesData[0].genre}</p>
      <p>Cast: {seriesData[0].cast}</p>
      <a href={seriesData[0].watch_url}>
        <button>Watch Now</button>
      </a>
    </>
  )
}

export default NetflixSeries
