import { useState } from 'react'
import './App.css'
import EventProps from './assets/components/EventProps'
import NetflixSeries from './assets/components/NetflixSeries'
import Profile from './assets/components/Profile'

function App() {
 
  return (
    <>
     <NetflixSeries/>
      <Profile />
      <EventProps/>
    </>
  )
}

export default App
