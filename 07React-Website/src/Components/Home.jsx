import React from 'react'
import HeroSection from './HeroSection'

const Home = () => {
  const data ={
    name:"John Cena",
    image: "./public/images/hero.svg"

  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default Home

