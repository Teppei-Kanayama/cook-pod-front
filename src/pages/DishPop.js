import React from 'react';
import {
  Link,
} from "react-router-dom";

function DishPop(props) {
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
      <p>
        <Link to={"/dish/" + props.dishId  + "/edit"} >編集する</Link>
      </p>
    </div>
   </div>
  );
}

export default DishPop;
