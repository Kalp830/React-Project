import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

 function inc(){
   setNum(num + 1);
 }

 function dec(){
  setNum(num - 1);
}


  return (
    <>
      <div className="card">
        <h2>Current Value {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Add count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Remove count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
       
      <h2>This is second example</h2>
        <h2>Current Value {num}</h2>
        {/* <button className='btn' onClick={() => setNum((num) => num + 1)}>
          Increment
          </button>
        <button className='btn' onClick={() => setNum((num) => num - 1)}>
          Decrement 
          </button> */}

         <button className='btn' onClick={inc}>
          Increment
          </button>
        <button className='btn' onClick={dec}>
          Decrement 
          </button>

       
    </>
  )
}

export default App
