import { useState } from 'react'
import './App.css'
import Resturant from './components/Basics/Resturant'
import MapDemo from './components/Basics/MapDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
        <div className='row'>
             <div className='col-12'>
                <div className='row'>
                   <div className='d-flex'>
                   <Resturant/>
                   </div>
                </div>
             </div>
             
         {/* <MapDemo/> */}
      
      
      </div>
    </div>
    </>
  )
}

export default App
