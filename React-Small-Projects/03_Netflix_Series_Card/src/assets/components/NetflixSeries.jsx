import React from 'react'
import seriesData from '../../api/seriesData.json';
import SeriesCard from '../components/SeriesCard';
const NetflixSeries = () => {
  return (
    <>
<ul>
 {seriesData.map((curEle) => (
     <SeriesCard key={curEle.id}  curEle={curEle}/>
     ))}
      </ul>
    </>
  )
}

export default NetflixSeries
