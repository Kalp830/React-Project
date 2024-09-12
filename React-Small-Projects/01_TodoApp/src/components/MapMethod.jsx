import React from 'react'
import FoodItems from './FoodItems'
import ErrorMessage from './ErrorMessage'

const MapMethod = () => {
  let foodItems = ['Dal', 'Chaval', 'Ghee', 'Roti', 'Green Vegitabl', 'Salad', 'Papad', 'Panner'];
  return (
    <>
      <h3>Helthy Foods</h3>
        <ErrorMessage items={foodItems}/>
        <FoodItems items={foodItems}/>
      </>
  )
}

export default MapMethod
