import React from 'react'

const MapMethod = () => {
  let foodItems = ['Dal', 'Chaval', 'Ghee', 'Roti', 'Green Vegitabl', 'Salad', 'Papad', 'Panner']
  return (
    <>
      <h3>Helthy Items</h3>
      <ul className='list-group'>
        {foodItems.map((item, index)=>(
           <li key={index} className='list-group-item text-start'>{item}</li>
        ))};
        </ul>
         
    
    </>
  )
}

export default MapMethod
