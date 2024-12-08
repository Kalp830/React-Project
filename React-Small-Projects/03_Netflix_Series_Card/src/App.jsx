import { useState } from 'react'
import './App.css'
import NetflixSeries from './assets/components/NetflixSeries'
import Profile from './assets/components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NetflixSeries/>
     <Profile/>
    </>
  )
}

export default App
