import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Report from './pages/Report';
import Center from './pages/Center';
import Contact from './pages/Contact';


const Header = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/report" element={<Report/>} />
      <Route path="/center" element={<Center/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Header
