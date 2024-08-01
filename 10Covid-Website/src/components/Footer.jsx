import React from 'react';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube  } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className='footer-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-3 col-lg-3 col-md col'>
           <div className='sub_footer'>
             <h5>About</h5>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, obcaecati.</p>
             <div className='social-media'>
                <div className='d-flex'>
                  <a href='#'><BiLogoFacebookCircle /></a>
                  <a href='#'><BiLogoTwitter /></a>
                  <a href='#'><BiLogoInstagram  /></a>
                  <a href='#'><BiLogoYoutube  /></a>
                </div>
             </div>
           </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md col'>
         <div className='sub_footer-links'>
        <h5>Quick Links</h5>
        <div className='d-flex flex-column lh-lg'>
           <a href='#'>Symptoms</a>
           <a href='#'>Prevention</a>
           <a href='#'>FAQs</a>
           <a href='#'>About Coronavirus</a>
           <a href='#'>Contact Us</a>
        </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md col'>
        <div className='sub_footer-links'>
        <h5>Helpful Links</h5>
        <div className='d-flex flex-column lh-lg'>
           <a href='#'>Health are Professional</a>
           <a href='#'>LGU Facility</a>
           <a href='#'>Protect Your Family</a>
           <a href='#'>World Health</a>
        </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md col'>
        <div className='sub_footer-links'>
        <h5>Resources</h5>
        <div className='d-flex flex-column lh-lg'>
           <a href='#'>WHO Website</a>
           <a href='#'>CDC Website</a>
           <a href='#'>Gov Website</a>
           <a href='#'>DOH Website</a>
        </div>
          </div>
        </div>
      </div>
    </div>
         <div className='bottom-footer text-center py-3'>
          @ {new Date().getFullYear()} All Right Reserved.
         </div>
      
    </footer>
  )
}

export default Footer
