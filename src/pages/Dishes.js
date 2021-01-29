import React, { useState } from 'react';
import axios from 'axios';
import DishPop from './DishPop'
import { baseUrl } from '../Settings'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
  const apiUrl = baseUrl + '/dishes';
  const [dishes, setDishes] = useState(null);
  const [order, setOrder] = useState("desc");
  const [display, setDisplay] = useState(false)

  const fetchData = async() => {
    const response = await axios.get(apiUrl);
    setDishes(response.data);
    setDisplay(true);
  }

  const setOrderOnChange = (event) => {
    setOrder(event.target.value);
    setDisplay(false);
  }

  const radios = [
    { name: '新しい順', value: 'desc' },
    { name: '古い順', value: 'asc' },
  ];

  return (
    <div>
      <h2>料理の一覧</h2>

      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="light"
            name="radio"
            value={radio.value}
            checked={order === radio.value}
            onChange={ setOrderOnChange }
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <br />

      <Button variant="success" onClick={fetchData}>
          表示
      </Button>

      <div>
        {  display && orderDish(dishes, order)  }
      </div>

    </div>
  );
}

function orderDish(dishes, order) {
  let arr
  if (order === "desc") {
    arr = dishes
  } else {
    arr = dishes.slice(0).reverse()
  }
  const orderedDishes = arr.map(
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
  );
  return orderedDishes;
}

export default Dishes;
