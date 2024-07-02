
import Menu from './MenuApi'
import { useState } from 'react';
import MenuCard from './MenuCard';

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)
  return (
    <>
     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
