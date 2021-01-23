import React from 'react';
import axios from 'axios';

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

  handleSubmit(event, func) {
    func(this.state.value)
    event.preventDefault();  // よくわからないが、これがないと空欄に戻る。（APIは叩かれる）
  }

  render() {
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
        console.log('error :/');
      }
    };

    // TODO: URLやメモも送信する
    return (
      <form onSubmit={(event) => {this.handleSubmit(event, craeteDish)}}>
        <label>
          料理名:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="送信" />
      </form>
    );
  }
}

export default NewDish;
