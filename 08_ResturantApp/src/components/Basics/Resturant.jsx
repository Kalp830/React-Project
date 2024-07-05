
import Menu from './MenuApi'
import { useState } from 'react';
import MenuCard from './MenuCard';
import "./style.css";
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
   return curElem.category;
  })
),
"All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  

  const fliterItem = (category) =>{
      if(category === "All"){
        return  setMenuData(Menu);
      }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar fliterItem={fliterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
