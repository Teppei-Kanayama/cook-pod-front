import React from 'react';
import axios from 'axios';

function Dishes() {
  const apiUrl = 'http://localhost:3000/dishes';

  const fetchData = async() => {
    const response = await axios.get(apiUrl)
    console.log(response);
  }

  return (
    <div>
      <h2>料理の一覧</h2>
      <button onClick={fetchData}>
          表示
      </button>
    </div>
  );
}

export default Dishes;
