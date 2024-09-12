import React from 'react'

const ErrorMessage = () => {
  let foodItems = ['Dal', 'Chaval', 'Ghee', 'Roti', 'Green Vegitabl', 'Salad', 'Papad', 'Panner'];
  return (
    <>
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
    </>
  )
}

export default ErrorMessage
