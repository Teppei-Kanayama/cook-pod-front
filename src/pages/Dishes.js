import React, { useState } from 'react';
import axios from 'axios';
import DishPop from './DishPop'
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
          </button>
        </div>
        {seen ? <DishPop
                  toggle={ togglePop }
                  dishId={ props.dishId }
                  name={ props.name }
                  url={ props.url }
                  memo={ props.memo } /> : null}
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
