import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function NewDishForm(props) {
  let history = useHistory();

  const newDish = async (name, url, memo) => {
    try {
      const result = await axios.post(
        'http://localhost:3000/dishes',
        {
          name: name,
          url: url,
          memo: memo
        }
      );
      console.log(result);
    } catch (error) {
      console.log('Error!');
    }
  };

  function handleSubmit(event) {
    newDish(props.formNameValue, props.formUrlValue, props.formMemoValue);
    event.preventDefault();  // これは何？
    history.push("/");  // 料理詳細ページを作ったら、そこに飛ぶように変更する
  }

  return (
    <form onSubmit={ handleSubmit }>
      <p>料理名 <input type="text" value={ props.formNameValue } onChange={ props.handleNameChange }/></p>
      <p>URL <input type="text" value={ props.formUrlValue } onChange={ props.handleUrlChange }/></p>
      <p>メモ <input type="text" value={ props.formMemoValue } onChange={ props.handleMemoChange }/></p>
      <input type="submit" value="送信" />
    </form>
  );
}

class NewDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formNameValue: '',
      formUrlValue: '',
      formMemoValue: '',
    };
    // これらは何？
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleMemoChange = this.handleMemoChange.bind(this);
  }

  // TODO: 要素ごとに関数を作っているのをなんとかしたい
  handleNameChange(event) {
    this.setState({formNameValue: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({formUrlValue: event.target.value});
  }

  handleMemoChange(event) {
    this.setState({formMemoValue: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>料理の新規登録</h2>
        <NewDishForm
          formNameValue={ this.state.formNameValue }
          formUrlValue={ this.state.formUrlValue }
          formMemoValue={ this.state.formMemoValue }
          handleNameChange={ this.handleNameChange }
          handleUrlChange={ this.handleUrlChange }
          handleMemoChange={ this.handleMemoChange }
        />
      </div>
    )
  }
}

export default NewDish;
