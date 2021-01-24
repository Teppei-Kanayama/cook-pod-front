import React, { useState } from 'react';
import axios from 'axios';
import Dish from './Dish'
import './Dishes.css';

function DishFrame(props) {
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };

  return (
      <div>
        <div>
          <button className="square" onClick={ togglePop }>
            <p>{ props.name }</p>
            <p>{ props.url }</p>
            <p>{ props.memo }</p>
          </button>
        </div>
        {seen ? <Dish toggle={ togglePop } dishId={ props.dishId } /> : null}
      </div>
  );
}

function Dishes() {
  const apiUrl = 'http://localhost:3000/dishes';
  const [dishes, setDishes] = useState(null);

  const fetchData = async() => {
    const response = await axios.get(apiUrl)
    setDishes(response.data)
  }

  return (
    <div>
      <h2>料理の一覧</h2>
      <button onClick={fetchData}>
          表示
      </button>

      <div>
        {
          dishes && dishes.map(
            (dish, index) => {
              return(
                <DishFrame
                  dishId={ dish.id }
                  name={ dish.name }
                  url={ dish.url }
                  memo={ dish.memo }
                  />
              )
            }
          )
        }
      </div>

    </div>
  );
}

export default Dishes;
