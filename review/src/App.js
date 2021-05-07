import React from 'react';

class SomeComp extends React.Component {

  render() {
    return (
      <div>this is a different component</div>
    )
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'kirkby'
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      name: 'brian'
    })
  }

  render() {
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <button onClick={this.handleClick}>make it brian</button>
      </div>
    )
  }
}

export default App;