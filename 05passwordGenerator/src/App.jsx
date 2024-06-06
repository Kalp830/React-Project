import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [legnth, setLegnth] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");


  return (
   <>
    <h1 className="text-4xl text-white text-center">Password Generator</h1>
   </>
  )
}

export default App
