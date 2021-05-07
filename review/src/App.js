import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'kirkby'
    }
  }

  render() {
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <button>make it brian</button>
      </div>
    )
  }
}

export default App;