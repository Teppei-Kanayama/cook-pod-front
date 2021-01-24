import React from 'react';
import {
  useParams
} from "react-router-dom";

function Dish(props) {
  // let { dishId } = useParams();

  const handleClick = () => {
   props.toggle();
  };

  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={handleClick}>&times;    </span>
     <p> Dish id is { props.dishId } </p>
    </div>
   </div>
  );
}

export default Dish;
