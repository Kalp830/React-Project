import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import {Box, Link, ButtonGroup} from '@chakra-ui/react'
import './App.css'

const navPath = [
  {
    label:'Home',
    path:'/'
  },
  {
    label:'Contact Us',
    path:'/contact-us'
  },
  {
    label:'About Us',
    path:'/about-us'
  },
  
]

function App() {
  return (
  
    <Box>
       <ButtonGroup bgColor={'gray:200'} width={'100%'} py={4} spacing={4} >
                 {navPath.map((navPath)=> (
                  <Link key={navPath.path} href={navPath.path}>{navPath.label}</Link>
                 ))}
       </ButtonGroup>
        <BrowserRouter> 
            <Routes>
               <Route path ="/" element={<HomePage/>} />
               <Route path ="/contact-us" element={<ContactUs/>} />
               <Route path ="/about-us" element={<AboutUs/>} />
            </Routes>
        </BrowserRouter>
      
        </Box>
  )
}

export default App
