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
                <div className='col-xl-6 col-md-6 col'>
                <CardDetail
                  imgURL='./images/symptom-img.png'
                  title='High Fever'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-6 col-md-6 col'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Cough'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-6 col-md-6 col'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Sore Troth'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
                <div className='col-xl-6 col-md-6 col'>
                <CardDetail
                imgURL='./images/symptom-img.png'
                title='Headache'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doua. Ut enim a in reprehenderit in.'
                />
                </div>
               
            </div>
          </div>
          </section>
    </>
  )
}

 export const CardDetail = ({title, description, imgURL}) =>{
   return(
      <>
          <div className='symptom-card'>
         <div className='row'>
            <div className='col-xl-auto col'>
            <img src={imgURL}/>
            </div> 
            <div className='col-xl-8'>
            <h2>{title}</h2>
            <p>{description}</p>
            </div> 
        </div>
        </div>

      </>
   );
}

export default SympOfCorona
