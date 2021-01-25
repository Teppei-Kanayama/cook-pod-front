import React from 'react';

function Dish(props) {
  const handleClick = () => {
   props.toggle();
  };

  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={handleClick}>&times;    </span>
      <ul>
      <li> Id: { props.dishId } </li>
      <li> 料理名: { props.name } </li>
      <li> URL: { props.url } </li>
      <li> メモ: { props.memo } </li>
      </ul>
    </div>
   </div>
  );
}

export default Dish;
