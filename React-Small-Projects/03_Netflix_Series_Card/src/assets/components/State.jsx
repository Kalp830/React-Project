import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(5);
    const handleButtonClick = () => {
        setCount(()=> count + 1)
    }
  return (
    <>
          <h1>Value {count}</h1>
          <button onClick={handleButtonClick}>Increment Count</button>
    </>
  )
}

export default State
