import React from 'react'

const SympOfCorona = () => {
  return (
    <>
       <section className='symptions-of-corona'>
          <div className='container'>
          <div className='title pb-4'>
                    <h2 className='text-center'>Symptoms of Coronavirus</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            <div className='row'>
                <div className='col-xl-5 col-md-5 col-12'>
                <CardDetail
                  imgURL='./images/symptom-img.png'
                  title='High Fever'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-1 col-md-1 col'></div>
                <div className='col-xl-5 col-md-5 col-12'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Cough'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-1 col-md-1 col'></div>
                <div className='col-xl-5 col-md-5 col-12'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Sore Troth'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-1 col-md-1 col'></div>
                <div className='col-xl-5 col-md-5 col-12'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Headache'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-1 col-md-1 col'></div>
            </div>

            <div className='row'>
                <div className='col-xl-6 col-md col-lg'>
                <p> <span className='text-blue fw-bold'>Stay at home and call your doctor</span> : Lorem ipsum dolor sit amet, consectetur adipiscing elit
sed do eiusmod tempor</p> 
                </div>
                <div className='col-xl-2 offset-xl-2 offset-md-0 offset-lg-2 col-md col-lg'>
                <button className='btn btn-prevent text-white'>Help Line</button>
                </div>
            </div>
          </div>
          </section>
    </>
  )
}

 export const   CardDetail = ({title, description, imgURL}) =>{
   return(
      <>
          <div className='symptom-card'>
         <div className='row'>
            <div className='col-xl-auto col'>
            <img src={imgURL}/>
            </div> 
            <div className='col-xl'>
            <h2>{title}</h2>
            <p>{description}</p>
            </div> 
        </div>
        </div>

      </>
   );
}

export default SympOfCorona
