import React from 'react';
import axios from 'axios';

// https://dog.ceo/api/breed/hound/images/random/3

class App extends React.Component {
  state = {
    dogs: ['https://images.dog.ceo/breeds/hound-english/n02089973_2404.jpg']
  }

  render() {
    return (
      <div>
        <h1>some nice doggos!</h1>
        {this.state.dogs.map(dogImageUrl => {
          return <img alt="dog image" src={dogImageUrl} key={dogImageUrl} />
        })}
      </div>
    )
  }
}

export default App;