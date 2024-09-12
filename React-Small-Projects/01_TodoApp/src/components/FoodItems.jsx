import React from 'react'
import Items from './Items'

const FoodItems = () => {
  let foodItems = ['Dal', 'Chaval', 'Ghee', 'Roti', 'Green Vegitabl', 'Salad', 'Papad', 'Panner', 'Pakoda', 'Chilli flex']
  return (
    <>
       <ul className='list-group'>
        {foodItems.map((item)=>(
           <Items key={item} items={item}/>
        ))};
        </ul>
    </>
  )
}

export default FoodItems
