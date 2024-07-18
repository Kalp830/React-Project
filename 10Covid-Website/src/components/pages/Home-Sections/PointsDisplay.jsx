import React from 'react'

const PointsDisplay = () => {

    const listItem = [
            {title: 'Symptoms', description:'Nostrum Exacerbation', img:'./images/symptoms.png'},
            {title: 'Protection', description:'Nostrum Exacerbation', img:'./images/mask.png'},
            {title: 'Security', description:'Nostrum Exacerbation', img:'./images/security.png'},
            {title: 'Treatment', description:'Nostrum Exacerbation', img:'./images/treatment.png'},
    ];

  return (
      <div className='container point-display py-5'>
        <div className='row'>
            <div className='d-xl-flex justify-content-between'>
            {listItem.map((item, index)=>(
                <div className='row' key={index}>
                <div className='col-auto'>
                <img src={item.img}  alt={item.title}/>
                </div>
                <div className='col-auto'>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                </div>
        </div>
          ))}
            </div>
        </div>
      </div>
    
  );
};

export default PointsDisplay


