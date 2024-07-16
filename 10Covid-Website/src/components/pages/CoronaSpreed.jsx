import React from 'react'

const CoronaSpreed = () => {
    const imgCorona = './images/corona-img2.jpg';

  return (
    <>
      <section className='about-corona my-5'>
        <div className='container'>
            <div className='row'>
            <div className='col'>
                    <h3>How to Coronavirus Spreed?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                    <div className='point-list'>
                        <ul className='listing'>
                              <li>Lorem ipsum dolor sit amet, consectetur </li>
                              <li>Dolore magna aliqua. Ut enim .</li>
                              <li>Duis aute irure dolor in </li>
                        </ul>
                    </div>
                    <button className='btn btn-prevent'>How to Learn</button>
                </div>
                <div className='col-1'></div>
                <div className='col-auto'>
                    <img className='img-fluid' src={imgCorona}/>
                </div>

            </div>
        </div>
      </section>
    </>
  );
}

export default CoronaSpreed;
