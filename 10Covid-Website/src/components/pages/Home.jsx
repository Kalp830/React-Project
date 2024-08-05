import React from 'react';
import CoronaStatics from './Home-Sections/CoronaStatics';
import AboutCorona from './Home-Sections/AboutCorona';
import CoronaSpreed from './Home-Sections/CoronaSpreed';
import PointsDisplay from './Home-Sections/PointsDisplay';
import PreventCorona from './Home-Sections/PreventCorona';
import HowtoProtect from './Home-Sections/HowtoProtect';
import SympOfCorona from './Home-Sections/SympOfCorona';
import NewsArticale from './Home-Sections/NewsArticale';

const Home = () => {
  const headerImg = './images/header-img.png';
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
              <img className='img-fluid' src={headerImg} />
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

      {/* Different Points */} 
       <PointsDisplay/>

      {/* Privent Corona Section */} 
      <PreventCorona/>

      {/* How to protect yourself */} 
      <HowtoProtect/>

       {/* Symptoms of Corona */} 
       <SympOfCorona/>

       {/* News and Article */} 
       <NewsArticale/>
    </>
  )
}

export default Home
