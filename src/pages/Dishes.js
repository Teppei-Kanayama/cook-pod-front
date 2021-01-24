import React, { useState } from 'react';
import axios from 'axios';

function Dish(props) {

  return (
      <div>
        <p>{ props.name }</p>
        <p>{ props.url }</p>
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
                <Dish
                  name={ dish.name }
                  url={ dish.url }
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
