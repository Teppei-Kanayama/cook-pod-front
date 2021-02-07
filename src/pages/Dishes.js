import React, { useState } from 'react';
import axios from 'axios';
import DishModal from './DishModal'
import { baseUrl } from '../Settings'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import otachi from '../otachi.png'

function DishCard(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ otachi } onClick={ () => setModalShow(true) } />
          <Card.Body>
            <Card.Title onClick={ () => setModalShow(true) }>{ props.name }</Card.Title>
          </Card.Body>
        </Card>

        <DishModal
          show={ modalShow }
          onHide={ () => setModalShow(false) }
          dishId={ props.dishId }
          name={ props.name }
          url={ props.url }
          memo={ props.memo } />
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
      <DishCard
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
