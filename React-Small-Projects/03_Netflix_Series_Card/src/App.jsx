import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetflixSeries from './assets/components/NetflixSeries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NetflixSeries/>
    </>
  )
}

export default App
