import React from 'react'
import CardDesign from './CardDesign'

const PreventCorona = () => {
  return (
    <>
    <div className="prevent-corona">
        <div className='container d-flex'>
           <div className='row align-items-center'>
            <div className='col-12 col-xl-6'>
               <div className='row'>
                  <div className='col pt-4'>
                  <CardDesign />
                  </div>
                  <div className='col'>
                  <CardDesign />
                  </div>
               </div>

               <div className='row'>
                  <div className='col pt-4'>
                  <CardDesign />
                  </div>
                  <div className='col'>
                  <CardDesign />
                  </div>
               </div>
            </div>
             
            <div className='col-12 col-xl-6'>
            <h3>How to Prevent Coronavirus?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                    <div className='point-list'>
                        <ul className='listing'>
                              <li>Lorem ipsum dolor sit amet, consectetur </li>
                              <li>Dolore magna aliqua. Ut enim .</li>
                              <li>Duis aute irure dolor in </li>
                        </ul>
                    </div>
                    <button className='btn btn-prevent'>Read more about prevention</button>
            </div>
           </div>
       </div>
    </div>
      
    </>
  )
}

export default PreventCorona
