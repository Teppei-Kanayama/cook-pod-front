import React, { useState } from 'react';
import axios from 'axios';

function Dish(props) {

  const onClick = () => {
    console.log(props.dishId);
  }

  return (
      <div>
        <button className="square" onClick={ onClick }>
          <p>{ props.name }</p>
          <p>{ props.url }</p>
          <p>{ props.memo }</p>
        </button>
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
