import React from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

class EditDishForm extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3000/dishes/' + this.props.dishId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({formNameValue: data.name});
        this.setState({formUrlValue: data.url});
        this.setState({formMemoValue: data.memo});
      });
  }

  handleNameChange(event) {
    this.setState({formNameValue: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({formUrlValue: event.target.value});
  }

  handleMemoChange(event) {
    this.setState({formMemoValue: event.target.value});
  }

  handleSubmit(event) {
    // ここで関数定義をするのは一般的なのか？
    const editDish = async (name, url, memo) => {
      try {
        const result = await axios.put(
          'http://localhost:3000/dishes/' + this.props.dishId,
          {
            name: name,
            url: url,
            memo: memo
          }
        );
        console.log(result);
      } catch (error) {
        console.log('何かがおかしい');
      }
    };
    editDish(this.state.formNameValue, this.state.formUrlValue, this.state.formMemoValue);
    event.preventDefault();
  }

  handleSubmitButton(evnet) {
    console.log('pushed!')
  }

  render() {
    return (
      <div>
        <h2>料理の編集</h2>
        <form onSubmit={ this.handleSubmit }>
          <p>料理名 <input type="text" value={ this.state.formNameValue } onChange={ this.handleNameChange }/></p>
          <p>URL <input type="text" value={ this.state.formUrlValue } onChange={ this.handleUrlChange }/></p>
          <p>メモ <input type="text" value={ this.state.formMemoValue } onChange={ this.handleMemoChange }/></p>
          <input type="submit" value="送信" onClick={ this.handleSubmitButton }/>
        </form>
      </div>
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
