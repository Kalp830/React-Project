import React from 'react';
import CoronaStatics from './CoronaStatics';
import AboutCorona from './AboutCorona';
import CoronaSpreed from './CoronaSpreed';

const Home = () => {
  return (
    <>
     <section className='top-header jumbotron'>
         <div className='container'>
           <div className='row pt-5'>
            <div className='col-6'>
               <h6>COVID 19 Awareness</h6>
               <h1>Stay Safe. Stay Home.</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
               <button className='btn btn-prevent'>How to Prevent</button>
            </div>
            <div className='col-6 text-end'>
              <img src='./images/header-img.png' />
            </div>
           </div>
         </div>
     </section>

      {/* corona virus statustics */}
        <CoronaStatics/>

     {/* what is corona */}
       <AboutCorona />
       
     {/* Corona Spreed */} 
      <CoronaSpreed/>

    </>
  )
}

export default Home
