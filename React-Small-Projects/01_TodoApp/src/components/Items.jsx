import React from 'react';
import style from './Item.module.css';

const Items = ({items}) => {
  const ClickBuyBtn=()=>{
    console.log(`${items} Buy button cliked.`)
  }
  return (
    <>
      <div className='d-flex'>
      <li className={`${style["ul-bg-gray"]} ${style["li-text-white"]} list-group-item text-start w-100`}>{items}</li>
      {/* <button className={`${style.button} btn btn-outline-danger`} onClick={()=>console.log(`${items} Buy button cliked.`)}>Buy</button> */}
      <button className={`${style.button} btn btn-outline-danger`} onClick={ClickBuyBtn}>Buy</button>
      </div>
    </>
  )
}

export default Items;
