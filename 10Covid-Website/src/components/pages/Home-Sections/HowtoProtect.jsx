import React from 'react'

const HowtoProtect = () => {
    const imgURL = './images/how-to-protect.png';
    const doesList = [
        {points:'Stay at Home'},
        {points:'Wear Mask'},
        {points:'Use Sanitizer'},
        {points:'Disinfect your home'},
        {points:'Wash your hands'},
        {points:'Frequant Self-isolation'}
    ];

    const notToDo = [
        {points:'Avoid infect people'},
        {points:'Avoid animals'},
        {points:'Avoid handshaking'},
        {points:'Avoid infarct surfaces'},
        {points:'Avoid touching your face'},
        {points:'Avoid doorplates'}
    ];

  return (
    <>
    <div className='how-to-protect'>
       <div className='container'>
       <div className='title'>
                    <h2>How to Protect Yourself</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              <div className='row'>
                <div className='col-xl-12 col-12'>
                     <div className='row'>
                        <div className='col-12 col-xl-6'>
                             <div className='row'>
                                <div className='col-12 col-xl-6 mt-5'>
                                    <div className='whatDo'>
                                        {doesList.map((point, index)=>(
                                          <ul className='list-group' key={index}>
                                          <li className='list-group-items'>{point.points}</li>
                                          </ul>
                                        ))
                                      }
                                    </div>
                                </div>
                                <div className='col-12 col-xl-6 mt-5'>
                                   <div className='notDo'>
                                      {notToDo.map((point, index)=>(
                                           <ul className='list-group' key={index}>
                                           <li className='list-group-items'>{point.points}</li>
                                           </ul>
                                      ))
                                      }

                                   </div>
                                </div>
                             </div>
                        </div>
                        <div className='col-12 col-xl-6'>
                            <img className='img-fluid' src={imgURL} alt='how to protect'/>
                        </div>
                     </div>
                </div>
               
              </div>
          </div>
    </div>
    </>
  )
}

export default HowtoProtect
