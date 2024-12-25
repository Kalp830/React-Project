import { useState } from 'react'
import './App.css'
import EventProps from './assets/components/EventProps'
import NetflixSeries from './assets/components/NetflixSeries'
import Profile from './assets/components/Profile'
import State from './assets/components/State'

function App() {
 
  return (
    <>
     <NetflixSeries/>
      <Profile />
      <EventProps />
      <State/>
    </>
  )
}

export default App
