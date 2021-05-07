import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Poki from './Poki';

function Pokemon(props) {
  const [myVar, setMyVar] = useState("this is a value");
  return (
    <>
      {props.pokemon.length === 0 ? <div>there are no pokemon!</div> : props.pokemon.map(poki => (
        <Poki poki={poki} />
      ))}
      <div>{myVar}</div>
    </>
  );
}

export default Pokemon;
