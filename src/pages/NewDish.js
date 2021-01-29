import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { baseUrl } from '../Settings'
import './Dishes.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function NewDishForm(props) {
  let history = useHistory();

  const newDish = async (name, url, memo) => {
    try {
      const result = await axios.post(
        baseUrl + '/dishes',
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
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Label>料理名</Form.Label>
        <Form.Control type="text" placeholder="アボカドカルボナーラ" value={ props.formNameValue } onChange={ props.handleNameChange } />
      </Form.Group>
      <Form.Group>
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" placeholder="https://youtube.com/example" value={ props.formUrlValue } onChange={ props.handleUrlChange } />
      </Form.Group>
      <Form.Group>
        <Form.Label>メモ</Form.Label>
        <Form.Control type="text" placeholder="おいしい" value={ props.formMemoValue } onChange={ props.handleMemoChange } />
      </Form.Group>
      <Button variant="primary" type="submit">
        送信
      </Button>
    </Form>
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
