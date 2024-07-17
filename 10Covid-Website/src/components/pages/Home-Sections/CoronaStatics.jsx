import React from 'react'

const CoronaStatics = () => {
  return (
    <>
      <div className='corona-statics'>
          <div className='container'>
              <div className='row'>
                <div className='title'>
                    <h2>Coronavirus Statistics</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='static-coutns pt-5'>
                  <div className='row'>
                  <div className='col'>
                    <ChildComponent
                      image='./images/solar_virus-outline.svg'
                      count='18,265,25'
                      info='Active Patient'
                    />
                    </div>
                    <div className='col'>
                    <ChildComponent
                     image='./images/solar_virus-outline.svg'
                     count='12,345,67'
                     info='Recovered'
                    />
                    </div>
                    <div className='col'>
                    <ChildComponent
                    image='./images/solar_virus-outline.svg'
                    count='2,345,678'
                    info='Deaths'
                    />
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

const ChildComponent = ({image, count, info}) =>{
    return(
        <>
        <figure><img src={image} alt='corona-virus'/></figure>
        <span>{count}</span>
        <p>{info}</p>
       </>
    );
}

export default CoronaStatics
