import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log("Pokemon: Component Mounts");
  }

  componentDidUpdate() {
    console.log("Pokemon: Component Updates");
  }

  render() {
    console.log("Pokemon: Component Renders");
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;
