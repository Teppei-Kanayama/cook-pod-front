import React, { useState } from 'react';
import axios from 'axios';
import './Dishes.css';

class PopUp extends React.Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>
  );
 }
}

function Dish(props) {
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    console.log('clicked');
    setSeen(!seen);
  };

  // const onClick = () => {
  //   console.log(props.dishId);
  // }

  return (
      <div>
        <div>
          <button className="square" onClick={ togglePop }>
            <p>{ props.name }</p>
            <p>{ props.url }</p>
            <p>{ props.memo }</p>
          </button>
        </div>
        {seen ? <PopUp toggle={ togglePop } /> : null}
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
