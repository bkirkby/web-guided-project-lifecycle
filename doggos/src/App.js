import React from 'react';
import axios from 'axios';

// https://dog.ceo/api/breed/hound/images/random/3

class App extends React.Component {
  state = {
    dogs: [],
    breed: 'hound'
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/hound/images/random/3')//https://images.dog.ceo/breeds/hound-english/n02089973_2404.jpg')
      .then(res => {
        // console.log('bk: App.js: cdm: fetch dogs: res: ', res.data.message)
        this.setState({
          dogs: res.data.message
        })
      })
      .catch(err => console.error('unable to retrieve dogs: ', err))
  }

  handleHounds = e => {
    e.preventDefault();
    this.setState({
      breed: 'hound'
    })
  }

  handleAfricans = e => {
    e.preventDefault();
    this.setState({
      breed: 'african'
    })
  }

  render() {
    return (
      <div>
        <h1>some nice doggos!</h1>
        <div><button onClick={this.handleHounds}>get hounds</button><button onClick={this.handleAfricans}>get africans</button></div>
        {this.state.dogs.map(dogImageUrl => {
          return <img alt="dog image" src={dogImageUrl} key={dogImageUrl} />
        })}
      </div>
    )
  }
}

export default App;