import React, {Component} from 'react';

class Counter extends Component {
  state = {
    number: 0
  };
  render() {
    return (
          <div className="App">
            <div>{this.state.number}</div>
            <button onClick={() => this.sum(this.state.number)}>+</button>
            <button onClick={() => this.min(this.state.number)}>-</button>
          </div>

    );
  }
  sum = number => {
    this.setState({number: number + 1});
  }
  min = number => {
    this.setState({number: number - 1});
  }
}

export default Counter;