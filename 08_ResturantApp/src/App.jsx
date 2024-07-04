import { useState } from 'react'
import './App.css'
import Resturant from './components/Basics/Resturant'
import MapDemo from './components/Basics/MapDemo'
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <>
    <div className='container'>
    <Row>
                <Row>          
                   <Resturant/>
                </Row>
             
         </Row>
                  {/* <MapDemo/> */}
    </div>
    </>
  )
}

export default App
