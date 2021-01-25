import React from 'react';
import {
  useParams
} from "react-router-dom";

class EditDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishId: null,
      name: null,
      url: null,
      memo: null,
    };
  }

  componentDidMount() {
    const dishId = 4
    const apiUrl = 'http://localhost:3000/dishes/' + dishId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({dishId: data.id});
        this.setState({name: data.name});
        this.setState({url: data.url});
        this.setState({memo: data.memo});
      });
  }

  render() {
    // const fetchData = async() => {
    //   const response = await axios.get(apiUrl);
    //   setDish(Object.values(response.data));
    // }
    // console.log(typeof this.state.dish);

    return (
      <div>
        <h2>料理の編集</h2>
        <p> { this.state.dishId } </p>
        <p> { this.state.name } </p>
      </div>
    )
  }
}

export default EditDish;
