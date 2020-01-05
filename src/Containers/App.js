import React, { Component } from 'react';
import classes from './App.module.css';
import Input from '../Components/Input';
import Info from '../Components/Info';

class App extends Component {
  state = {
    userInput: '',
    hideInfo: false
  };
  userInputHandler = event => {
    this.setState({ userInput: event.target.value });
  };
  hideInfoHandler = () => {
    this.setState(prevState => ({
      hideInfo: !prevState.hideInfo
    }));
  };
  listItemDeleteHandler = index => {
    const input = [...this.state.userInput];
    input.splice(index, 1);
    const updatedInput = input.join('');
    this.setState({ userInput: updatedInput });
    console.log(this.state);
  };
  render() {
    return (
      <div className={classes.App}>
        <Info input={this.state.userInput} hideInfo={this.state.hideInfo} />
        <Input
          userInputHandler={this.userInputHandler}
          value={this.state.userInput}
        />
      </div>
    );
  }
}

export default App;
