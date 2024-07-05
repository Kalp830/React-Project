import { useState } from 'react'
import './App.css'
import Resturant from './components/Basics/Resturant'
import Row from 'react-bootstrap/Row';
import MapDemo from './components/Basics/MapDemo'
import UseState from './components/Hooks/useState';

function App() {

  return (
    <>
    <div className='container'>

                <Row>          
                   <Resturant/>
                   
                </Row>
                <UseState/>
   
                  {/* <MapDemo/> */}
    </div>
    </>
  )
}

export default App
