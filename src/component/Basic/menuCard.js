import React from 'react';

const MenuCard=({menu})=> {
  return (
    <>  
       <section className='main-card--container'>
        {menu.map((curElement)=>{
        return(
        <>
        <div className='card-container' key={curElement.id}>
        <div className='card'>
            <div className='card-body'>
          <span className='card-number card-circle subtle'>{curElement.id}</span>
          <span className='card-author subtle'>{curElement.category}</span>
          <h2 className='card-title'>{curElement.name}</h2>
          <span className='card-description subtle'>
          {curElement.description}
          </span>
          <div className='card-read'>Read</div>
          { <img src={curElement.image} alt="images" className='card-media'/> }
        </div>
      </div>   
    </div>
    </>
    );
    })}
    </section>
  </> 
  );
};

export default MenuCard;