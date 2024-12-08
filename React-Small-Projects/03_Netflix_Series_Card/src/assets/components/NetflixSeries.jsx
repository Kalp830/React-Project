import React from 'react'
import seriesData from '../../api/seriesData.json';
import SeriesCard from '../components/SeriesCard';
const NetflixSeries = () => {
  return (
    <>
<ul style={{listStyle:"none", padding:0, margin:0}}>
   <div className='row'>
    
 {seriesData.map((curEle) => (
  <div className='col-md-6'>
     <SeriesCard key={curEle.id}  curEle={curEle}/>
     </div>
     ))}
     </div>
      </ul>
    </>
  )
}

export default NetflixSeries
