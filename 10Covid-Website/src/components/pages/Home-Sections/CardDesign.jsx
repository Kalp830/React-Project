import React from 'react'

const CardDesign = () => {
    const homeIcon = './images/home-icon.svg'
  return (
    <>
      <div className="card">
         <div className="card-icon" style={{background:'#0097FE', padding:'15px 0'}}>
         <img className='img-fluid' src={homeIcon}/>
         </div>
         <div className='card-content'>
         <h2>Stay At Home</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit.</p>
         </div>
      </div>
    </>
  )
}
export default CardDesign
