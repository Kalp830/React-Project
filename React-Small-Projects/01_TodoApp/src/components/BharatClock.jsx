import React from 'react'

const BharatClock = () => {
  let newDate = new Date();
  return (
    <>
      <div className='container pt-4'>
      <h1 className='fw-bold'>Bharat Clock</h1>
      <div className='current-date-time'>
              <h4>Current Date and Time is : {newDate.toLocaleDateString()} - {newDate.toLocaleTimeString()}</h4>
        </div>
      </div>
      
    </>
  )
}

export default BharatClock
