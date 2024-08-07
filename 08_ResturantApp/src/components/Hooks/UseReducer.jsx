import React, {useReducer, useState} from 'react'
import './newstyle.css'

const reducer = (state, action) => {
    if (action.type === "INCR") {
      state = state + 1;
    }
  
    if (state > 0 && action.type === "DECR") {
      state = state - 1;
    }
    return state;
  };
  

const UseReducer = () => {
   // const [myNumber, setMyNumber] = useState(0);
   const intialData = 10;
   const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div
          class="button2" onClick={() => dispatch({ type: "DECR" })}>
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

export default UseReducer;
