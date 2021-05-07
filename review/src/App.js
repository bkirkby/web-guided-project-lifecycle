import React from 'react';

class SomeComp extends React.Component {

  componentDidMount() {
    console.log('bk: SomeComp: CDM called')
  }

  componentWillUnmount() {
    console.log('bk: SomeComp: CWU called!')
    // do some cleanup
  }

  render() {
    console.log('bk: SomeComp: render')
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

  componentDidMount() {
    console.log('bk: App.js: CDM called')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('bk: App.js: CDU called: prevProps, prevState: ', prevProps, prevState)
    // can compare prev with curr and see how it differs: prevState.name === this.state.name
    if (prevState.name !== this.state.name) {
      // name has changed, do something
      console.log('bk: App.js: CDU: name has changed!!!!')
    }
  }

  render() {
    console.log('bk: App.js: App: render')
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <button onClick={this.handleClick}>make it brian</button>
        <SomeComp />
      </div>
    )
  }
}

export default App;