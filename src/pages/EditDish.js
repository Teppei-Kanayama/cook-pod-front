import React from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

class EditDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: null,
    };
  }

  componentDidMount() {
    const dishId = 4
    const apiUrl = 'http://localhost:3000/dishes/' + dishId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({dish: Object.values(data)}));
  }

  render() {
    // const fetchData = async() => {
    //   const response = await axios.get(apiUrl);
    //   setDish(Object.values(response.data));
    // }

    return (
      <div>
        <h2>料理の編集</h2>
        <p> { this.state.dish } </p>
      </div>
    )
  }
}

export default EditDish;
