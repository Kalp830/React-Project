import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import menuData from './MenuApi';


const MenuCard = ({menuData}) => {
  return (
    <>
       {menuData.map((curElem)=>{
         return(
            <>
            <Card style={{ width: '18rem', padding:'10px', margin:'15px' }}>
            <Card.Img   src={curElem.image} />
            <Card.Body>
                <div className='border bg-info-subtle'>{curElem.id}</div>
                <Card.Title>{curElem.name}</Card.Title>
                <Card.Text>
                  {curElem.description}
                </Card.Text>
                <Card.Text>
                 Price :{curElem.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </>
         );
       })}
    </>
  )
}

export default MenuCard
