import React, {useState, useEffect} from 'react'
import './newstyle.css'


const UseEffect = () => {
    const [myNumber, setMyNumber] = useState(0)
    useEffect(()=>{
        document.title = `Chates (${myNumber})`
    }, []);

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
      </div>
    </>
  )
}

export default UseEffect;

