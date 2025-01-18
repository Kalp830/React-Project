import { useState } from 'react'
import './App.css'
import EventProps from './assets/components/EventProps'
import LiftingState from './assets/components/LiftingState'
import NetflixSeries from './assets/components/NetflixSeries'
import Profile from './assets/components/Profile'
import State from './assets/components/State'
import Todo from './assets/components/Todo/Todo'
import ToggleSwitch from './assets/components/toggle-switch/ToggleSwitch'

function App() {
 
  return (
    <>
     {/* <NetflixSeries/>
      <Profile />
      <EventProps />
      <State/>
      <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      <Todo />
    </>
  )
}

export default App
