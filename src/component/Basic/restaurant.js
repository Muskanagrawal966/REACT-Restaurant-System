import React from 'react';
import "./style.css";
import Menu from './menuapi.js';
import MenuCard from './menuCard.js';

const Restaurant= () =>
{ 
  const [menuData,setMenuData]=React.useState(Menu);
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElement)=>{
      return curElement.category===category;
    });
    setMenuData(updatedList);
  };
 
  console.log(menuData);
  return <>
  <nav className='navbar'>
    <div className='btn-group'>
      <button className='btn-group__item'
      onClick={()=>filterItem("breakfast")}>
        Breakfast</button>
      <button className='btn-group__item'
      onClick={()=>filterItem("lunch")}>Lunch</button>
      <button className='btn-group__item'
      onClick={()=>filterItem("evening")}>Evening</button>
      <button className='btn-group__item'
      onClick={()=>filterItem("dinner")}>Dinner</button>
      <button className='btn-group__item'
      onClick={()=>setMenuData(Menu)}>All</button>
    </div>
  </nav>
  <MenuCard menu={menuData}/>
  </>;
  
}

export default Restaurant;