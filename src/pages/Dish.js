import React from 'react';
import {
  useParams
} from "react-router-dom";

function Dish() {
  let { dishId } = useParams();
  return <h2>個別の料理 ID: { dishId }</h2>;
}

export default Dish;
