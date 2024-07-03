import React from 'react'

const MapDemo = () => {
    const fruitArry = ['Apple', 'Pinnaple', 'Strabarry', 'Bananan', 'Mango'];
    const fruitList = fruitArry.map((item)=> <p>{item}</p>)
  return (
    <>
      <div className='furitList'>{fruitList}</div>
    </>
  )
}

export default MapDemo
