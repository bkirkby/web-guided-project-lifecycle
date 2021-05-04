import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        pokemon:data
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    
    console.log("App: Component Updates");
  }

  render() {
    console.log("App: Component Renders");

    return (
      <div className="App">
        {
          (this.state.pokemon.length === 0)?<p>Loading</p>:<Pokemon pokemon={this.state.pokemon} />
        }
      </div>
    );
  }
}

export default App;
