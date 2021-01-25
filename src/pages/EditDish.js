import React from 'react';
import axios from 'axios';
import {
  useParams,
  useHistory
} from "react-router-dom";

function FormSubmission(props) {
  let history = useHistory();

  function handleSubmit(event) {
    // ここで関数定義をするのは一般的なのか？
    const editDish = async (dishId, name, url, memo) => {
      try {
        const result = await axios.put(
          'http://localhost:3000/dishes/' + dishId,
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
    editDish(props.dishId, props.formNameValue, props.formUrlValue, props.formMemoValue);
    event.preventDefault();
    history.push("/");
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
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  // handleSubmit(event) {
  //   // ここで関数定義をするのは一般的なのか？
  //   const editDish = async (name, url, memo) => {
  //     try {
  //       const result = await axios.put(
  //         'http://localhost:3000/dishes/' + this.props.dishId,
  //         {
  //           name: name,
  //           url: url,
  //           memo: memo
  //         }
  //       );
  //       console.log(result);
  //     } catch (error) {
  //       console.log('何かがおかしい');
  //     }
  //   };
  //   editDish(this.state.formNameValue, this.state.formUrlValue, this.state.formMemoValue);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <h2>料理の編集</h2>
        <FormSubmission
          dishId={ this.props.dishId }
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

function EditDish() {
  let { dishId } = useParams();
  return (
    <EditDishForm
      dishId={ dishId }
    />
  );

}

export default EditDish;
