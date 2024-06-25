import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const data={
    name: "About Us",
    image: "./public/images/about1.svg"
  }
  return (
    <HeroSection {...data}/>
  )
}

export default About
