import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pokemon: data
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
