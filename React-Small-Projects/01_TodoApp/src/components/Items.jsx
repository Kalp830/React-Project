import React from 'react';
import style from './Item.module.css';

const Items = ({items}) => {
  return (
    <>
      <li className={`${style["ul-bg-gray"]} ${style["li-text-white"]} list-group-item text-start`}>{items}</li>
    </>
  )
}

export default Items;
