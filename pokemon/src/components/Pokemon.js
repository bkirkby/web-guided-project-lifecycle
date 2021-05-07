import React from 'react';
import PropTypes from 'prop-types';
import Poki from './Poki';

function Pokemon(props) {
  return (
    <>
      {props.pokemon.map(poki => (
        <Poki poki={poki} />
      ))}
    </>
  );
}

export default Pokemon;
