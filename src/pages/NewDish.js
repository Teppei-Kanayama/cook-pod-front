import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function SubmitForm(props) {
  let history = useHistory();

  function handleSubmit(onSubmit) {
    onSubmit();
    history.push("/");
  }

  const craeteDish = async (dishName) => {
    try {
      const result = await axios.post(
        'http://localhost:3000/dishes',
        {
          name: dishName,
          url: 'http://example.com/test',
          memo: '特になし'
        }
      );
      console.log(result);
    } catch (error) {
      console.log('何かがおかしい');
    }
  };

  // TODO: URLやメモも送信する
  // TODO: リファクタ
  return (
    <form onSubmit={(event) => {handleSubmit( () => {props.onSubmit(event, craeteDish)})}}>
    <label>
    料理名:
    <input type="text" value={props.value} onChange={props.handleChange} />
    </label>
    <input type="submit" value="送信" />
    </form>
    );
}

class NewDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event, onSubmit) {
    onSubmit(this.state.value)
    event.preventDefault();  // よくわからないが、これがないと空欄に戻る。（APIは叩かれる）
  }

  render() {
    return (
      <SubmitForm
        onSubmit={ this.handleSubmit }
        handleChange = {this.handleChange}
        value = {this.value}
      />
    );
  }
}

export default NewDish;
