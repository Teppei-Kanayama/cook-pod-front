import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Dishes() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(100);  // the current state value and a function that lets you update it

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 100)}>
        Click me
      </button>

      <HomeButton />
    </div>
  );
}

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/record");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default Dishes;
