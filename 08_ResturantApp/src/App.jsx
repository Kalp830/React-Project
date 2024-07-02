import { useState } from 'react'
import './App.css'
import Resturant from './components/Basics/Resturant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
        <div className='row'>
          <div className='col-3'>
          <Resturant/>
          </div>
          <div className='col-3'>
          <Resturant/>
          </div>
          <div className='col-3'>
          <Resturant/>
          </div>
          <div className='col-3'>
          <Resturant/>
          </div>
      
      
      </div>
    </div>
    </>
  )
}

export default App
