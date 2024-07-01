import { useState } from 'react'
import './App.css'
import Resturant from './components/Resturant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Resturant/>
    </>
  )
}

export default App
