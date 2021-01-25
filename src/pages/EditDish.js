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
      formNameValue: '',
      formUrlValue: '',
      formMemoValue: '',
    };
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
        this.setState({dishId: data.id});
        this.setState({name: data.name});
        this.setState({url: data.url});
        this.setState({memo: data.memo});
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
    console.log('A name was submitted: ' + this.state.formMemoValue);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>料理の編集</h2>
        <form onSubmit={ this.handleSubmit }>
          <p>料理名 <input type="text" value={ this.state.formNameValue } onChange={ this.handleChange }/></p>
          <p>URL <input type="text" value={ this.state.formUrlValue } onChange={ this.handleUrlChange }/></p>
          <p>メモ <input type="text" value={ this.state.formMemoValue } onChange={ this.handleMemoChange }/></p>
          <input type="submit" placeholder="送信" />
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
