
import Menu from './MenuApi'
import { useState } from 'react';
import MenuCard from './MenuCard';
import "./style.css";


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const fliterItem = (category) =>{
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
<div className="btn-group pt-5" role="group" aria-label="Basic outlined example">
  <button  className="btn btn-outline-primary" onClick={() => fliterItem("breakfast")}>Breakfast</button>
  <button  className="btn btn-outline-primary" onClick={() => fliterItem("lunch")} >Lunch</button>
  <button  className="btn btn-outline-primary" onClick={() => fliterItem("dinner")}>Dinner</button>
</div>



     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
