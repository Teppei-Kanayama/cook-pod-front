import React from 'react';
import {
  useParams
} from "react-router-dom";

class EditDishForm extends React.Component {
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
    const apiUrl = 'http://localhost:3000/dishes/' + this.props.dishId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({dishId: data.id});
        this.setState({name: data.name});
        this.setState({url: data.url});
        this.setState({memo: data.memo});
      });
  }

  // TODO: 編集できない
  render() {
    return (
      <form>
        <h2>料理の編集</h2>
        <p>料理名 <input type="text" value={ this.state.name }/></p>
        <p>URL <input type="text" value={ this.state.url }/></p>
        <p>メモ <input type="text" value={ this.state.memo }/></p>
        <input type="submit" value="送信" />
      </form>
    )
  }
}

function EditDish() {
  let { dishId } = useParams();
  return (
    <EditDishForm
      dishId={ dishId }
    />
  );

}

export default EditDish;
