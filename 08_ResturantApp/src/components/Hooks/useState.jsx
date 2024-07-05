import React, {useState} from 'react'
import './newstyle.css'

const UseState = () => {
    const [myNumber, setMyNumber] = useState(0)
  return (
    <>
      <div className="center_div">
        <p>{myNumber}</p>
        <div class="button2" onClick={()=> setMyNumber(myNumber + 5)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div
          class="button2" onClick={()=> myNumber > 0 ? setMyNumber(myNumber - 5) : setMyNumber(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  )
}

export default UseState;
